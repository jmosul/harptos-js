import builder from '../src/index';
import HarptosDate from '../src/HarptosDate';

describe( 'HarposDate', () => {

    describe( 'daystamp', () => {
        it('takes and returns the day stamp', () => {
            const date = builder(123461);

            expect(date.daystamp).toBe(123461);
        });
    });

    describe( 'add', () => {
        it('returns a new Harptos date', () => {
            const date = builder(123461);

            const result = date.add(0);

            expect(result).toBeInstanceOf(HarptosDate);
            expect(date === result).toBeFalsy();
            expect(date.daystamp).toEqual(result.daystamp);
        });

        it('adds 1 day', () => {
            const date = builder(123461);

            const result = date.add(1);

            expect(result.daystamp).toEqual(123462);
        });
    });

    describe( 'subtract', () => {
        it('returns a new Harptos date', () => {
            const date = builder(123461);

            const result = date.add(0);

            expect(result).toBeInstanceOf(HarptosDate);
            expect(date === result).toBeFalsy();
            expect(date.daystamp).toEqual(result.daystamp);
        });

        it('subtracts 1 day', () => {
            const date = builder(123461);

            const result = date.subtract(1);

            expect(result.daystamp).toEqual(123460);
        });
    });
});
