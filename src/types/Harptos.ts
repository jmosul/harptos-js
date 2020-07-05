export default interface Harptos {
    year: number,
    month: number,
    day: number,
    daystamp: number,
    format: (format: string) => string
    add: (amount: number) => Harptos
    subtract: (amount: number) => Harptos
    locale: string
}
