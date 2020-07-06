import Locale from '../types/Locale';
import harptos_gb from '../locales/harptos_gb';

export class LocalesRepository {
    private locales: Locale[] = [
        harptos_gb,
    ];

    get(locale: string): Locale {
        const locales = this.locales.filter(({name}):boolean => name === locale);

        if (!locales) {
            throw Error(`Locale ${locale} has not been loaded.`);
        }

        return locales.shift() as Locale;
    }

    add(locale: Locale): this {
        if (!this.exists(locale.name)) {
            this.locales.push(locale);
        }

        return this;
    }

    exists(locale: string): boolean {
        return this.locales.filter(({name}):boolean => name === 'locale').length > 0;
    }
}

export default new LocalesRepository();
