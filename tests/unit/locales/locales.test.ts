import harptos_gb from '../../../src/locales/harptos_gb';
import harptos_us from '../../../src/locales/harptos_us';
import common_gb from '../../../src/locales/common_gb';
import common_us from '../../../src/locales/common_us';
import en_gb from '../../../src/locales/en_gb';
import en_us from '../../../src/locales/en_us';

describe('Locales', () => {
    const locales = [
        harptos_gb,
        harptos_us,
        common_gb,
        common_us,
        en_gb,
        en_us,
    ];

    locales.forEach((locale) => {
        describe(`Locale ${locale.name}`, () => {

            describe('ordinal', () => {
                const ordinals = [];

                for (let day = 1; day <= 30; day++) {
                    ordinals.push({ day, ordinal: 'th' });
                }

                ordinals[0].ordinal = 'st';
                ordinals[1].ordinal = 'nd';
                ordinals[2].ordinal = 'rd';
                ordinals[20].ordinal = 'st';
                ordinals[21].ordinal = 'nd';
                ordinals[22].ordinal = 'rd';

                ordinals.forEach(({ day, ordinal }) => {
                    it(`For ${day} ordinal should be ${ordinal}`, () => {
                        expect(locale.ordinal(day)).toBe(ordinal);
                    });
                });
            });
        });
    });
});
