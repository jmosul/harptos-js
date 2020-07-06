import HarptosDate from './HarptosDate';
import parseYmd from './parsers/parseYmd';
import YmdDate, { isParsedStamp } from './types/YmdDate';
import parseDaystamp from './parsers/parseDaystamp';
import Harptos from './types/Harptos';
import Locale from './types/Locale';
import { DEFAULT_LOCALE } from './constants';
import LocalesRepository from './repositories/LocalesRepository';

interface HarptosJS {
    (input: any, locale ?: string): Harptos,
    locale: (locale: string) => void,
    addLocale: (locale: Locale) => void,
}

let defaultLocale: string = DEFAULT_LOCALE;

const builder = (input: any): HarptosDate => {
    let daystamp: number = (new Date()).getTime() / 86400000;

    switch (typeof input) {
        case 'number':
            daystamp = input as number;
            break;

        case 'string':
            daystamp = parseYmd(input as string);
            break;

        case 'object':
            if (isParsedStamp(input)) {
                return new HarptosDate(input as YmdDate);
            }
            break;
    }

    daystamp = Math.floor(daystamp);

    const parsedStamp = parseDaystamp(input as number);

    return new HarptosDate(parsedStamp);
}
const base = {
    locale(locale: string): void {
        defaultLocale = locale;
    },

    addLocale(locale: Locale): void {
        LocalesRepository.add(locale);
    },
};

const build = (input: any, locale?: string): Harptos => {
    const harptos = builder(input);

    harptos.locale = locale || defaultLocale;

    return harptos;
}

const harptosJS: HarptosJS = Object.assign(
    build,
    base
);

export default harptosJS;
