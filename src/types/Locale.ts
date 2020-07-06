export default interface Locale {
    name: string,
    weekdays: Array<string>,
    weekdaysShort: Array<string>,
    weekdaysMin: Array<string>,
    months: Array<string>,
    monthsShort: Array<string>,
    era: string,
    eraShort: string,
    additionals: Array<string>,
    additionalsShort: Array<string>,
    formats: {
        [index:string]: string
    },
    ordinal: (n: number) => string,
};
