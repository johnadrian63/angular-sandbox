import { ISort, IPageOptions } from "../filter.model";

export interface IPostDefaultFilter extends ISort, IPageOptions { }

export interface IPostSearchFilter extends IPostDefaultFilter {
    q: string;
}
