export class NumberUtil {
    public static isNumber(value: any): boolean {
        return Number.isInteger(parseInt(value));
    }

    public static isPositive(value: number): boolean {
        return NumberUtil.isNumber(value) && value > 0;
    }
}
