import HarptosDate from './HarptosDate';
import parseDaystamp from './parsers/parseDaystamp';
import YmdDate, { isParsedStamp } from './types/YmdDate';
import parseYmd from './parsers/parseYmd';

export default function(input: any): HarptosDate {
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
