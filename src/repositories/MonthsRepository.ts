import Month from '../types/Month';
import { DAYS_IN_MONTH, LEAP_MONTH, LEAP_MONTHS, MONTHS_IN_YEAR } from '../constants';

const months: Month[] = [];
let standardDays = 1;
let leapDays = 1;

while(months.length < MONTHS_IN_YEAR) {
    const index = months.length + 1
    const extraDays = LEAP_MONTHS.indexOf(index) >= 0 ? 1 : 0;

    const month: Month = {
        index,
        leapMonth: index === LEAP_MONTH,
        maxDays: DAYS_IN_MONTH + extraDays,
        firstDay: standardDays,
        firstDayLeapYear: leapDays,
    };

    standardDays += month.maxDays;
    leapDays += month.maxDays;

    if (month.leapMonth) {
        leapDays++;
    }

    months.push(month);
}

export default months;
