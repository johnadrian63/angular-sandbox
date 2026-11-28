import { IPaginationMeta } from "../filter.model";

export interface IQuote {
    id: string;
    quote: string;
    author: string;
}

export interface IQuoteCollection extends IPaginationMeta {
    quotes: IQuote[];
}
