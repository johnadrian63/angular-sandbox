import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Observable, Subject } from "rxjs";

@Injectable()
export abstract class TableBuilderSearchService {

    public get onSearch$(): Observable<string> {
        return this.searchSubject.asObservable();
    }

    public formGroup = new FormGroup({
        searchText: new FormControl("")
    });

    // FIXME convert this to signal()
    public searchText!: string;

    // FIXME convert this to signal()
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
