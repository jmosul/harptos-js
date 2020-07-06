export default function padNum(num: number): string {
    return num <= 9 ? `0${num}` : `${num}`;
}
