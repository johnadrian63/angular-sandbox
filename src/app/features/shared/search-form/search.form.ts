import { Component, inject } from "@angular/core";
import { FieldTree, form, FormField, FormRoot } from "@angular/forms/signals";

import { ISearchForm } from "./search.form.model";
import { SearchFormService } from "./search.form.service";

@Component({
    selector: "app-search-form",
    templateUrl: "./search.form.html",
    imports: [FormRoot, FormField]
})
export class SearchForm {
    public readonly searchForm!: FieldTree<ISearchForm>;

    private readonly searchFormService: SearchFormService = inject<SearchFormService>(SearchFormService);

    constructor() {
        this.searchForm = form<ISearchForm>(this.searchFormService.searchModel, {
            submission: {
                action: async (field) => {
                    const searchText = field.searchText().value();

                    this.searchFormService.handleSearch(searchText);
                }
            }
        });
    }
}