// @ts-ignore
import loader from 'csv-load-sync';

const dates: Array<{
    description: string
    daystamp: string
    locale: string
    day: string
    month: string
    year: string
    M: string
    MM: string
    MMM: string
    MMMM: string
    D: string
    Do: string
    DD: string
    y: string
    YYYY: string
    N: string
    NN: string
    NNN: string
    L: string
    LL: string
    LLL: string
}> = loader('tests/helpers/testData.csv');


export default dates.map((data) => ({
    description: data.description,
    daystamp: parseInt(data.daystamp),
    locale: data.locale,
    parsed: {
        day: parseInt(data.day),
        month: parseInt(data.month),
        year: parseInt(data.year),
    },
    formats: [
        {
            format: 'M',
            expected: data.M,
        },
        {
            format: 'MM',
            expected: data.MM,
        },
        {
            format: 'MMM',
            expected: data.MMM,
        },
        {
            format: 'MMMM',
            expected: data.MMMM,
        },
        {
            format: 'D',
            expected: data.D,
        },
        {
            format: 'Do',
            expected: data.Do,
        },
        {
            format: 'DD',
            expected: data.DD,
        },
        {
            format: 'y',
            expected: data.y,
        },
        {
            format: 'YYYY',
            expected: data.YYYY,
        },
        {
            format: 'N',
            expected: data.N,
        },
        {
            format: 'NN',
            expected: data.NN,
        },
        {
            format: 'NNN',
            expected: data.NNN,
        },
        {
            format: 'L',
            expected: data.L,
        },
        {
            format: 'LL',
            expected: data.LL,
        },
        {
            format: 'LLL',
            expected: data.LLL,
        },
    ],
}));
