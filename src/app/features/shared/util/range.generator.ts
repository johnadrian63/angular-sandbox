export function generateRange(range: number): number[] {
    return [...Array(range).keys()].map((value: number) => value + 1);
}
