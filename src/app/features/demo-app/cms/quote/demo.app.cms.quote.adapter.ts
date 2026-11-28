import { ITableBuilderRowData } from "../../../shared/table-builder";
import { IQuote } from "../../../shared/external-api/dummyjson/model/quote/quote.model";

export interface IQuoteAdapter extends ITableBuilderRowData, IQuote { }

export class QuoteAdapter implements IQuoteAdapter {

    public get rowId(): string | number {
        return this.id;
    }

    public get id(): string {
        return this.data.id;
    }

    public get quote(): string {
        return this.data.quote;
    }

    public get author(): string {
        return this.data.author;
    }

    constructor(private readonly data: IQuote) { }
}
