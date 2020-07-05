import YmdDate from '../types/YmdDate';
import parseObject from './parseObject';

export default function (Ymd: string): number {
    const YmdParts:Array<number> = Ymd.split('-').map((num) => parseInt(num));

    const parsedStamp = {
        year: YmdParts[0],
        month: YmdParts[1],
        day: YmdParts[2]
    } as YmdDate;

    return parseObject(parsedStamp);
}
