import daystamps from '../../helpers/testData';
import parseInput from '../../../src/parsers/parseYmd';
import padNum from '../../../src/helpers/padNum';

describe('parseYmd', () => {
    daystamps.forEach(({ daystamp, parsed, description }) => {

        const Ymd: string = `${parsed.year}-${padNum(parsed.month)}-${padNum(parsed.day)}`;

        describe(`parsers ${Ymd}: ${description}`, () => {
            let result: number;

            beforeAll(() => result = parseInput(Ymd))

            it(`returns daystamp ${daystamp}`, () => {
                expect(result).toBe(daystamp);
            });
        });
    });
});
