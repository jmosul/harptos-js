export const DISCRIMINATOR = 'IParsedStamp';

export function isParsedStamp(input: any): input is ParsedStamp {
    return input._discriminator === DISCRIMINATOR;
}

export default interface ParsedStamp {
    [index: string]: any;
    _discriminator: 'IParsedStamp',
    day: number,
    month: number,
    year: number,
}
