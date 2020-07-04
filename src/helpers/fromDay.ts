import * as constants from '../constants';

function fromDays(amount: number, factor: number): number {
    return Math.floor(amount / factor);
}

export function day(tenday:number): number {
    return fromDays(tenday, 1);
}

export function tenday(tenday:number): number {
    return fromDays(tenday, constants.DAYS_IN_TENDAY);
}

export function month(month:number): number {
    return fromDays(month, constants.DAYS_IN_MONTH);
}

export function year(year:number): number {
    return fromDays(year, constants.DAYS_IN_YEAR);
}

const convert: {[index: string]: Function} = {
    day,
    tenday,
    month,
    year,
};

export default convert;
