import YmdDate from '../types/YmdDate';
import { DAYS_IN_YEAR, LEAP_YEAR_FREQUENCY } from '../constants';
import monthRepo from '../repositories/MonthsRepository';
import Month from '../types/Month';

let isLeapYear: boolean = false;

function parseYears(years: number): number {
    const leapYearPercent = 1 / LEAP_YEAR_FREQUENCY;
    const days = (years - 1) * (DAYS_IN_YEAR + leapYearPercent);

    isLeapYear = years % LEAP_YEAR_FREQUENCY === 0;

    return Math.floor(days);
}

function parseMonths(months: number): number {
    const matchMonth: Month = monthRepo.filter(({ index }) => index === months)[0];
    const daysField = isLeapYear ? 'firstDayLeapYear' : 'firstDay';

    return matchMonth[daysField] - 1;
}

export default function(obj: YmdDate): number {
    return parseYears(obj.year)
        + parseMonths(obj.month)
        + obj.day;
}
