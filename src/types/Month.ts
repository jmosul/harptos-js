export default interface Month {
    [index: string]: any,
    index: number,
    maxDays: number,
    leapMonth: boolean,
    firstDay: number,
    firstDayLeapYear: number
}
