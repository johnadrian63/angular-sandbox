import {
    Injectable,
    Optional
} from "@angular/core";
import {
    Observable,
    Subject
} from "rxjs";

import { DataCollatorSearchService } from "./data.collator.search.service";
import { DataCollatorPaginationService } from "./data.collator.pagination.service";
import { DataCollatorSortService } from "./data.collator.sort.service";

@Injectable()
export abstract class DataCollatorResetService {

    public get reset$(): Observable<boolean> {
        return this.resetSubject.asObservable();
    }

    private readonly resetSubject: Subject<boolean> = new Subject<boolean>();

    constructor(
        protected readonly dataCollatorPaginationService: DataCollatorPaginationService,
        protected readonly dataCollatorSortService: DataCollatorSortService,
        @Optional() protected readonly dataCollatorSearchService: DataCollatorSearchService,
    ) { }

    public reset(): void {
        this.dataCollatorSearchService?.reset();
        this.dataCollatorPaginationService.reset();
        this.dataCollatorSortService.reset();

        this.resetSubject.next(true);
    }
}
