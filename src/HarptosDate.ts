import parseNumber from './parsers/parseNumber';
import YmdDate, { DISCRIMINATOR } from './types/YmdDate';
import parseObject from './parsers/parseObject';
import parseDaystamp from './parsers/parseDaystamp';
import Harptos from './types/Harptos';
import { DEFAULT_LOCALE } from './constants';
import formatter from './formatters';

export default class HarptosDate implements YmdDate, Harptos {
    private _day: number;
    private _month: number;
    private _year: number;
    private _locale: string = DEFAULT_LOCALE;

    public constructor(input: YmdDate, locale?: string) {
        this._year = input.year;
        this._month = input.month;
        this._day = input.day;
        this.locale = locale || this.locale;
    }

    [index: string]: any;
    _discriminator: 'IYmnDate' = DISCRIMINATOR;

    public get day(): number {
        return this._day;
    }

    public get month(): number {
        return this._month;
    }

    public get year(): number {
        return this._year;
    }

    public get daystamp(): number {
        return parseObject(this);
    }

    public get locale(): string {
        return this._locale;
    }

    public set locale(locale: string) {
        this._locale = locale;
    }

    public add(amount: number): Harptos {
        amount = parseNumber(amount);

        const parsed = parseDaystamp(amount + this.daystamp);

        return new HarptosDate(parsed, this.locale);
    }

    public subtract(amount: number): Harptos {
        return this.add(amount * -1);
    }

    public format(format: string): string {
        return formatter(this, format);
    }
}
