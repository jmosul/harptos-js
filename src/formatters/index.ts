import Harptos from '../types/Harptos';
import LocalesRepository from '../repositories/LocalesRepository';
import Locale from '../types/Locale';

let locale: Locale;

let matches: Array<string> = [];

interface Search {
    format: string
    parse: (harptos: Harptos) => string
}

const searches: Array<Search> = [
    {
        format: 'YYYY',
        parse: (harptos: Harptos) => `${harptos.year}`.padStart(4, '0')
    },
    {
        format: 'y',
        parse: (harptos: Harptos) => `${harptos.year}`
    },
    {
        format: 'MMMM',
        parse: (harptos: Harptos) => locale.months[harptos.month - 1]
    },
    {
        format: 'MMM',
        parse: (harptos: Harptos) => locale.monthsShort[harptos.month - 1]
    },
    {
        format: 'MM',
        parse: (harptos: Harptos) => `${harptos.month}`.padStart(2, '0')
    },
    {
        format: 'M',
        parse: (harptos: Harptos) => `${harptos.month}`
    },
    {
        format: 'DD',
        parse: (harptos: Harptos) => `${harptos.day}`.padStart(2, '0')
    },
    {
        format: 'D',
        parse: (harptos: Harptos) => `${harptos.day}`
    },
    {
        format: 'NNN',
        parse: (harptos: Harptos) => locale.era
    },
    {
        format: 'NN',
        parse: (harptos: Harptos) => locale.eraShort
    },
    {
        format: 'N',
        parse: (harptos: Harptos) => locale.eraShort
    },
    {
        format: 'o',
        parse: (harptos: Harptos) => locale.ordinal(harptos.day)
    }
];

function dateFormatter(harptos: Harptos, format: string): string {
    matches = [];
    locale = LocalesRepository.get(harptos.locale);

    format = format.replace('LLL', locale.formats.LLL);
    format = format.replace('LL', locale.formats.LL);
    format = format.replace('L', locale.formats.L);


    console.log('h', harptos.year);

    const formatted = searches.reduce((formattedDate, {format, parse}): string => {
        if (formattedDate.indexOf(format) >= 0) {
            matches.push(parse(harptos));

            return formattedDate.replace(format, `${matches.length - 1}%`)
        }

        return formattedDate;
    }, format);

    return matches.reduce((formattedDate, replace, index): string => formattedDate.replace(`${index}%`, replace), formatted)
}

const formatter = Object.assign(
    dateFormatter,
)

export default formatter;
