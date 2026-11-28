import { Injectable } from "@angular/core";

import { DataCollatorPaginationService } from "../../../../../shared/data-collator/data.collator.pagination.service";

@Injectable()
export class DemoAppCmsPostViewPaginationService extends DataCollatorPaginationService {
    public override reset(): void {
        // do nothing
    }
}
