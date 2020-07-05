import HarptosDate from './HarptosDate';
import parseYmd from './parsers/parseYmd';
import YmdDate, { isParsedStamp } from './types/YmdDate';
import parseDaystamp from './parsers/parseDaystamp';
import Harptos from './types/Harptos';
import Locale from './types/Locale';
import { DEFAULT_LOCALE } from './constants';
import LocalesRepository from './repositories/LocalesRepository';

const builder = function(input: any): HarptosDate {
    let daystamp: number = (new Date()).getTime() / 86400000;

    switch (typeof input) {
        case 'number':
            daystamp = <number>input;
            break;

        case 'string':
            daystamp = parseYmd(<string>input);
            break;

        case 'object':
            if (isParsedStamp(input)) {
                return new HarptosDate(<YmdDate>input);
            }
            break;
    }

    daystamp = Math.floor(daystamp);

    const parsedStamp = parseDaystamp(<number>input);

    return new HarptosDate(parsedStamp);
}

interface HarptosJS {
    (input: any, locale ?: string): Harptos,
    locale: (locale: string) => void,
    addLocale: (locale: Locale) => void,
}

let defaultLocale: string = DEFAULT_LOCALE;

const base = {
    locale(locale: string): void {
        defaultLocale = locale;
    },

    addLocale(locale: Locale): void {
        LocalesRepository.add(locale);
    },
};

const build = function(input: any, locale?: string): Harptos {
    const harptos = builder(input);

    harptos.locale = locale || defaultLocale;

    return harptos;
}

const harptosJS: HarptosJS = Object.assign(
    build,
    base
);

export default harptosJS;
