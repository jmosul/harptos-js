export const DISCRIMINATOR = 'IYmnDate';

export function isParsedStamp(input: any): input is YmdDate {
    return input._discriminator === DISCRIMINATOR;
}

export default interface YmdDate {
    [index: string]: any;
    _discriminator: 'IYmnDate',
    day: number,
    month: number,
    year: number,
}
