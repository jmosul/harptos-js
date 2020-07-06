import * as constants from '../constants';

const fromDays = (amount: number, factor: number): number => Math.floor(amount / factor);

export const day = (amount:number): number => fromDays(amount, 1);

export const tenday = (amount:number): number => fromDays(amount, constants.DAYS_IN_TENDAY);

export const month = (amount:number): number => fromDays(amount, constants.DAYS_IN_MONTH);

export const year = (amount:number): number => fromDays(amount, constants.DAYS_IN_YEAR);

const convert: {[index: string]: (amount: number) => number} = {
    day,
    tenday,
    month,
    year,
};

export default convert;
