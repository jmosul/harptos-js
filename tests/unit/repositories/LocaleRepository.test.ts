import { LocalesRepository } from '../../../src/repositories/LocalesRepository';

describe('LocaleRepository', () => {
    let repo: LocalesRepository;

    beforeEach(() => repo = new LocalesRepository());

    describe( 'get', () => {
        it('returns queried locale', () => {
            const result = repo.get('harptos_gb');

            expect(result.name).toBe('harptos_gb');
        });
    });
});
