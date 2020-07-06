import builder from '../../src';
import HarptosDate from '../../src/HarptosDate';
import { DEFAULT_LOCALE } from '../../src/constants';

describe( 'HarptosDate', () => {
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

    describe( 'locale', () => {
        afterEach(() => builder.locale(DEFAULT_LOCALE));

        it('sets and returns locale', () => {
            const harptos = builder(1234);

            harptos.locale = 'harptos_us';

            expect(harptos.locale).toBe('harptos_us');
        });

        it('returns default locale', () => {
            const harptos = builder(1234);

            expect(harptos.locale).toBe('harptos_gb');
        });

        it('builds with default locale', () => {
            builder.locale('harptos_us');

            const harptos = builder(1234);

            expect(harptos.locale).toBe('harptos_us');
        });
    });
});
