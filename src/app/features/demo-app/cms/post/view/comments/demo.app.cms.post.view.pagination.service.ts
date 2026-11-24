import { Service } from "@angular/core";

import { DataCollatorPaginationService } from "../../../../../shared/data-collator";

@Service()
export class DemoAppCmsPostViewPaginationService extends DataCollatorPaginationService {
    public override reset(): void {
        // cleanup logic
    }

    public override handlePageChange(page: number, pageSize: number): void {
        // implement logic
    }
}