import { ISort, IPaginationOptions } from "../model/filter.model";

export interface IPostDefaultFilter extends ISort, IPaginationOptions { }

export interface IPostSearchFilter extends IPostDefaultFilter {
    q: string;
}
