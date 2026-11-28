import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Observable } from "rxjs";

import { IQuoteCollection } from "./model/quote/quote.model";
import { IQuoteFilter } from "./model/quote/quote.filter.model";

@Service()
export class DummyJsonQuoteService {
    private readonly apiUrl = "https://dummyjson.com/quotes";
    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);

    public getList(filter: IQuoteFilter): Observable<IQuoteCollection> {
        return this.httpClient.get<IQuoteCollection>(`${this.apiUrl}`, {
            params: {
                ...filter
            }
        });
    }
}
