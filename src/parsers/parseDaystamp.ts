import fromDay from '../helpers/fromDay';
import toDay from '../helpers/toDay';
import parseNumber from './parseNumber';
import { DAYS_IN_YEAR, LEAP_YEAR_FREQUENCY } from '../constants';
import YmdDate from '../types/YmdDate';
import months from '../repositories/MonthsRepository';
import Month from '../types/Month';

let isLeapYear: boolean = false;

let parsed: YmdDate;

function parseUnit(days: number, unit: string): number {
    parsed[unit] = fromDay[unit](days) + 1;

    return days - toDay[unit](parsed[unit]);
}

function parseYears(days: number): number {
    const isMe = days === 735979;

    days = parseUnit(days, 'year');

    if(isMe) {
        console.log(days, parsed.year / LEAP_YEAR_FREQUENCY);
    }
    // remove extra day for each leap year
    days -= Math.floor(parsed.year / LEAP_YEAR_FREQUENCY);


    if (isLeapYear) {
        days++;
    }

    while (days <= 0) {
        parsed.year--;

        days += DAYS_IN_YEAR;
    }

    if(isMe) {
        console.log(days, parsed.year);
    }

    isLeapYear = parsed.year % LEAP_YEAR_FREQUENCY === 0;

    return days;
}

function parseMonths(days: number): number {
    let thisMonth: Month = { firstDay: 0, firstDayLeapYear: 0, index: 0, leapMonth: false, maxDays: 0 };
    const daysField = isLeapYear ? 'firstDayLeapYear' : 'firstDay';

    months.forEach((month: Month) => thisMonth = month[daysField] <= days ? month : thisMonth);

    days -= (thisMonth[daysField] - 1);

    parsed.month = thisMonth.index;

    return days;
}

export default function(amount: number): YmdDate {
    let days = parseNumber(amount);

    parsed = { day: 0, month: 0, year: 0 } as YmdDate;

    days = parseYears(days);
    //
    // if(735979 === amount) {
    //     console.log(days);
    // }

    days = parseMonths(days);

    parsed.day = days;

    return parsed;
}
