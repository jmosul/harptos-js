import daystamps from '../../helpers/testData';
import harptosJS from '../../../src';
import padNum from '../../../src/helpers/padNum';
import Harptos from '../../../src/types/Harptos';

describe('format', () => {
    daystamps.forEach(({ daystamp, parsed, description, locale, formats }) => {
        const Ymd: string = `${parsed.year}-${padNum(parsed.month)}-${padNum(parsed.day)}`;
        let date: Harptos;

        describe(`parsers ${Ymd} ${locale}: ${description}`, () => {
            beforeEach(() => date = harptosJS(daystamp));

            formats.forEach(({format, expected}) => {
                it(`returns format ${format}`, () => expect(date.format(format)).toBe(expected));
            });
        });
    });
});
