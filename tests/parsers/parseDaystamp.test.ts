import daystamps from '../daystamps.json';
import YmdDate from '../../src/types/YmdDate';
import parseDaystamp from '../../src/parsers/parseDaystamp';

describe('parseDaystamp', () => {
    daystamps.forEach(({ daystamp, parsed, description }) => {
        describe(`parsers ${daystamp}: : ${description}`, () => {
            let result: YmdDate;

            beforeAll(() => result = parseDaystamp(daystamp))

            it(`returns year as ${parsed.year}`, () => {
                expect(result.year).toBe(parsed.year);
            });

            it(`returns month as ${parsed.month}`, () => {
                expect(result.month).toBe(parsed.month);
            });

            it(`returns day as ${parsed.day}`, () => {
                expect(result.day).toBe(parsed.day);
            });
        });
    });
});
