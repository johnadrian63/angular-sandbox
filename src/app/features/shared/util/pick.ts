export function pickDefined<T extends object, K extends keyof T>(
    obj: T,
    keys: readonly K[]
): Pick<T, K> {
    return keys.reduce((result, key) => {
        if (obj[key] !== undefined) {
            result[key] = obj[key];
        }

        return result;
    }, {} as Pick<T, K>);
}