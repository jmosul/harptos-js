export default interface Locale {
    name: string,
    weekdays: string[],
    weekdaysShort: string[],
    weekdaysMin: string[],
    months: string[],
    monthsShort: string[],
    era: string,
    eraShort: string,
    additionals: string[],
    additionalsShort: string[],
    formats: {
        [index:string]: string
    },
    ordinal: (n: number) => string,
};
