import ParsedStamp from '../types/ParsedStamp';
import { DAYS_IN_YEAR, LEAP_YEAR_FREQUENCY } from '../constants';
import monthRepo from '../MonthsRepository';
import Month from '../types/Month';

let isLeapYear: boolean = false;

function parseYears(years: number): number {
    let days = (years - 1) * DAYS_IN_YEAR;

    days += Math.floor(years / LEAP_YEAR_FREQUENCY);

    isLeapYear = years % LEAP_YEAR_FREQUENCY === 0;

    return isLeapYear ? days - 1 : days;
}

function parseMonths(months: number): number {
    const matchMonth: Month = monthRepo.filter(({ index }) => index === months)[0];
    const daysField = isLeapYear ? 'firstDayLeapYear' : 'firstDay';

    return matchMonth[daysField] - 1;
}

export default function(obj: ParsedStamp): number {
    return parseYears(obj.year)
        + parseMonths(obj.month)
        + obj.day;
}
