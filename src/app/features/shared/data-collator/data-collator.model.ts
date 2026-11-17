// FIXME for refactoring
/**
 * @deprecated
 */
export enum PageSizeOptions {
    SIZE_25 = 25,
    SIZE_50 = 50,
    SIZE_100 = 100,
    SIZE_250 = 250
}

// FIXME for refactoring
/**
 * @deprecated
 */
export const DefaultPageSize = 25;

// FIXME for refactoring
/**
 * @deprecated
 */
export interface IPaging {
    page: number;
    pageSize: PageSizeOptions;
    count: number;
}
