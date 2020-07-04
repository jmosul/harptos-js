export const validUnits = [
    'day',
    'month',
    'year',
];

export default function (unit: string): string {
    const parsedUnit: string = unit.replace('s', '');

    if (validUnits.indexOf(parsedUnit) === -1) {
        throw Error(`${unit} is not a valid unit`);
    }

    return parsedUnit;
}
