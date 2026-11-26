import { Injectable } from "@angular/core";

import { DataCollatorPaginationService } from "../data-collator/data.collator.pagination.service";

@Injectable()
export class PocResourceCollatorPaginationService extends DataCollatorPaginationService {
    public override reset(): void {
        // do nothing
    }
}
