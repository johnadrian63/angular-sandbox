import { Injectable } from "@angular/core";
import {
    FormGroup,
    FormControl
} from "@angular/forms";
import {
    Observable,
    Subject
} from "rxjs";

import { IDataCollatorService } from "./data.collator.interface";

@Injectable()
export abstract class DataCollatorSearchService implements IDataCollatorService {

    public get onSearch$(): Observable<string> {
        return this.searchSubject.asObservable();
    }

    public formGroup = new FormGroup({
        searchText: new FormControl("")
    });

    // FIXME refactor this!
    public searchText!: string;
    public placeholder: string = "Search...";

    private readonly searchSubject: Subject<string> = new Subject<string>();

    public search(): void {
        // FIXME refactor this!
        const searchText = this.formGroup.get("searchText")?.value?.trim();

        // FIXME refactor this!
        this.searchText = searchText!;

        this.handleSearchText(this.searchText);

        this.searchSubject.next(this.searchText);
    }

    public clear(): void {
        // FIXME refactor this!
        this.formGroup.get("searchText")?.setValue("");
    }

    public reset(): void {
        this.clear();
        this.handleSearchText("");
    }

    protected abstract handleSearchText(searchText: string): void;
}
