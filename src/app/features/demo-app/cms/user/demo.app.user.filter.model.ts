export interface IPaging {
    skip: number;
    limit: number;
}

export interface IUserSort {
    sortBy: string;
    order: string;
}

export interface IUserDefaultFilter extends IUserSort, IPaging { }

export interface IUserFieldFilter extends IUserDefaultFilter {
    key: string;
    value: string;
}

export interface IUserSearchFilter extends IUserDefaultFilter {
    q: string;
}