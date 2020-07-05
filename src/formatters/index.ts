import Harptos from '../types/Harptos';
import LocalesRepository from '../repositories/LocalesRepository';


export default function (harptos: Harptos, format: string): string {
    const locale = LocalesRepository.get(harptos.locale);





}
