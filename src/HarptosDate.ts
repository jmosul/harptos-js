import parseNumber from './parsers/parseNumber';
import YmdDate, { DISCRIMINATOR } from './types/YmdDate';
import parseObject from './parsers/parseObject';
import parseDaystamp from './parsers/parseDaystamp';

export default class HarptosDate implements YmdDate{
    private _day: number;
    private _month: number;
    private _year: number;

    public constructor(input: YmdDate) {
        this._year = input.year - 1;
        this._month = input.month - 1;
        this._day = input.day - 1;
    }

    [index: string]: any;
    _discriminator: 'IYmnDate' = DISCRIMINATOR;

    public get day(): number {
        return this._day + 1;
    }

    public get month(): number {
        return this._month + 1;
    }

    public get year(): number {
        return this._year + 1;
    }

    public get daystamp(): number {
        return parseObject(this);
    }

    public add(amount: number): HarptosDate {
        amount = parseNumber(amount);

        const parsed = parseDaystamp(amount + this.daystamp);

        return new HarptosDate(parsed);
    }

    public subtract(amount: number): HarptosDate {
        return this.add(amount * -1);
    }
}
