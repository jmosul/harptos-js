import Harptos from '../types/Harptos';
import LocalesRepository from '../repositories/LocalesRepository';
import Locale from '../types/Locale';
import { DAYS_IN_MONTH, LEAP_DAY, LEAP_MONTH, LEAP_MONTHS } from '../constants';

let locale: Locale;

let matches: string[] = [];

let additionalDay: undefined | number;

interface Search {
    format: string
    parse: (harptos: Harptos) => string
}

const isAdditionalDay = () => additionalDay !== undefined || additionalDay === 0;

const searches: Search[] = [
    {
        format: 'YYYY',
        parse: (harptos: Harptos) => `${harptos.year}`.padStart(4, '0'),
    },
    {
        format: 'y',
        parse: (harptos: Harptos) => `${harptos.year}`,
    },
    {
        format: 'MMMM',
        parse: (harptos: Harptos) => isAdditionalDay() ? locale.additionals[additionalDay as number] : locale.months[harptos.month - 1],
    },
    {
        format: 'MMM',
        parse: (harptos: Harptos) => isAdditionalDay() ? locale.additionalsShort[additionalDay as number] : locale.monthsShort[harptos.month - 1],
    },
    {
        format: 'MM',
        parse: (harptos: Harptos) => isAdditionalDay() ? locale.additionalsShort[additionalDay as number] : `${harptos.month}`.padStart(2, '0'),
    },
    {
        format: 'M',
        parse: (harptos: Harptos) => isAdditionalDay() ? locale.additionalsShort[additionalDay as number] : `${harptos.month}`,
    },
    {
        format: 'DD',
        parse: (harptos: Harptos) => isAdditionalDay() ? '' : `${harptos.day}`.padStart(2, '0'),
    },
    {
        format: 'D',
        parse: (harptos: Harptos) => isAdditionalDay() ? '' : `${harptos.day}`,
    },
    {
        format: 'NNN',
        parse: (harptos: Harptos) => locale.era,
    },
    {
        format: 'NN',
        parse: (harptos: Harptos) => locale.eraShort,
    },
    {
        format: 'N',
        parse: (harptos: Harptos) => locale.eraShort,
    },
    {
        format: 'o',
        parse: (harptos: Harptos) => isAdditionalDay() ? '' : locale.ordinal(harptos.day),
    },
];

const getAdditionalDay = (harptos: Harptos): number | undefined => {
    if (harptos.month === LEAP_MONTH && harptos.day === LEAP_DAY) {
        return LEAP_MONTHS.length;
    }

    if (harptos.day > DAYS_IN_MONTH) {
        const leapMonth = LEAP_MONTHS.indexOf(harptos.month);

        return leapMonth === -1 ? undefined : leapMonth;
    }

    return undefined;
};

const dateFormatter = (harptos: Harptos, formatString: string, localeCode?: string): string => {
    matches = [];
    locale = LocalesRepository.get(localeCode || harptos.locale);
    additionalDay = getAdditionalDay(harptos);

    formatString = formatString.replace('LLL', locale.formats.LLL);
    formatString = formatString.replace('LL', locale.formats.LL);
    formatString = formatString.replace('L', locale.formats.L);

    let formatted = searches.reduce((formattedDate, { format, parse }): string => {
        if (formattedDate.indexOf(format) >= 0) {
            matches.push(parse(harptos));

            return formattedDate.replace(format, `${matches.length - 1}%`);
        }

        return formattedDate;
    }, formatString);

    formatted = matches.reduce((formattedDate, replace, index): string => formattedDate.replace(`${index}%`, replace), formatted);

    // trim non alpha numeric
    return formatted.replace(/^[^a-z\d]*|[^a-z\d]*$/gi, '')
        .replace('--', '-')
        .replace('//', '/')
        .replace('..', '.')
        .replace('__', '_')
        .replace('__', '_')
        .replace(/  +/g, ' ');
};

const formatter = Object.assign(
    dateFormatter,
);

export default formatter;
