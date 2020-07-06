import Harptos from '../types/Harptos';
import LocalesRepository from '../repositories/LocalesRepository';
import Locale from '../types/Locale';
import { DAYS_IN_MONTH, LEAP_DAY, LEAP_MONTH, LEAP_MONTHS } from '../constants';

let locale: Locale;

let matches: Array<string> = [];

let additionalDay: undefined | number;

interface Search {
    format: string
    parse: (harptos: Harptos) => string
}

function isAdditionalDay() {
    return additionalDay !== undefined || additionalDay === 0;
}

const searches: Array<Search> = [
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
        parse: (harptos: Harptos) => isAdditionalDay() ? locale.additionals[<number>additionalDay] : locale.months[harptos.month - 1],
    },
    {
        format: 'MMM',
        parse: (harptos: Harptos) => isAdditionalDay() ? locale.additionalsShort[<number>additionalDay] : locale.monthsShort[harptos.month - 1],
    },
    {
        format: 'MM',
        parse: (harptos: Harptos) => isAdditionalDay() ? locale.additionalsShort[<number>additionalDay] : `${harptos.month}`.padStart(2, '0'),
    },
    {
        format: 'M',
        parse: (harptos: Harptos) => isAdditionalDay() ? locale.additionalsShort[<number>additionalDay] : `${harptos.month}`,
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

function getAdditionalDay(harptos: Harptos): number | undefined {
    if (harptos.month === LEAP_MONTH && harptos.day === LEAP_DAY) {
        return LEAP_MONTHS.length;
    }

    if (harptos.day > DAYS_IN_MONTH) {
        const leapMonth = LEAP_MONTHS.indexOf(harptos.month);

        return leapMonth === -1 ? undefined : leapMonth;
    }

    return undefined;
}

function dateFormatter(harptos: Harptos, format: string): string {
    matches = [];
    locale = LocalesRepository.get(harptos.locale);
    additionalDay = getAdditionalDay(harptos);

    format = format.replace('LLL', locale.formats.LLL);
    format = format.replace('LL', locale.formats.LL);
    format = format.replace('L', locale.formats.L);

    let formatted = searches.reduce((formattedDate, { format, parse }): string => {
        if (formattedDate.indexOf(format) >= 0) {
            matches.push(parse(harptos));

            return formattedDate.replace(format, `${matches.length - 1}%`);
        }

        return formattedDate;
    }, format);

    formatted = matches.reduce((formattedDate, replace, index): string => formattedDate.replace(`${index}%`, replace), formatted);

    // trim non alpha numeric
    return formatted.replace(/^[^a-z\d]*|[^a-z\d]*$/gi, '')
        .replace('--', '-')
        .replace('//', '/')
        .replace('..', '.')
        .replace('__', '_')
        .replace('__', '_')
        .replace(/  +/g, ' ');
}

const formatter = Object.assign(
    dateFormatter,
);

export default formatter;
