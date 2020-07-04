import daystamps from '../daystamps.json';
import parseInput from '../../src/parsers/parseYmd';

function padNum(num: number): string {
    return num <= 9 ? `0${num}` : `${num}`;
}

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
