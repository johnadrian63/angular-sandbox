import { IPageOptions, ISort } from "../../model/filter.model";

export interface IUserDefaultFilter extends ISort, IPageOptions { }

export interface IUserFieldFilter extends IUserDefaultFilter {
    key: string;
    value: string;
}

export interface IUserSearchFilter extends IUserDefaultFilter {
    q: string;
}
