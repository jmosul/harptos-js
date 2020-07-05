export default interface Locale {
    name: string,
    weekdays: Array<string>,
    weekdaysShort: Array<string>,
    weekdaysMin: Array<string>,
    months: Array<string>,
    monthsShort: Array<string>,
    reckoning: string,
    reckoningShort: string,
    formats: {
        [index:string]: string
    },
    ordinal: (n: number) => string,
};
