export interface IPageOptions {
    skip?: number;
    limit?: number;
}

export interface IPaginationMeta extends IPageOptions {
    total: number;
}

export interface ISort {
    sortBy?: string;
    order?: string;
}
