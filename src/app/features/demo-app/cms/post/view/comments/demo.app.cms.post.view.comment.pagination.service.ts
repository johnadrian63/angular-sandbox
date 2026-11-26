import { Injectable } from "@angular/core";

import { DataCollatorPaginationService } from "../../../../../shared/data-collator";

@Injectable()
export class DemoAppCmsPostViewPaginationService extends DataCollatorPaginationService {
    public override reset(): void {
        // do nothing
    }

    public override handlePageChange(page: number, pageSize: number): void {
        // do nothing
    }
}
