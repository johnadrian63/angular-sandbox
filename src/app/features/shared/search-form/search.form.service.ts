import { Injectable, signal } from "@angular/core";

import { ISearchForm } from "./search.form.model";

@Injectable()
export abstract class SearchFormService {
    public readonly searchModel = signal<ISearchForm>({
        searchText: ""
    });

    public abstract handleSearch(searchText: string): void;

    public setValue(searchText: string): void {
        this.searchModel.set({ searchText });
    }
}