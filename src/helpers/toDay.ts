import * as constants from '../constants';

function toDays(amount: number, factor: number): number {
    return Math.floor(amount * factor);
}

export function day(tenday:number): number {
    return toDays(tenday, 1);
}

export function tenday(tenday:number): number {
    return toDays(tenday, constants.DAYS_IN_TENDAY);
}

export function month(month:number): number {
    return toDays(month - 1, constants.DAYS_IN_MONTH);
}

export function year(year:number): number {
    return toDays(year - 1, constants.DAYS_IN_YEAR);
}

const convert: {[index: string]: Function} = {
    day,
    tenday,
    month,
    year,
};

export default convert;
