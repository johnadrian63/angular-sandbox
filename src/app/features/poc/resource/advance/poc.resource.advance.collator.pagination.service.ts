import { Injectable } from "@angular/core";

import { DataCollatorPaginationService } from "../../../shared/data-collator/data.collator.pagination.service";
import { DataCollatorPaginationRouteService } from "../../../shared/data-collator/data.collator.pagination.route.service";

@Injectable()
// export class PocResourceCollatorPaginationService extends DataCollatorPaginationRouteService {
export class PocResourceCollatorPaginationService extends DataCollatorPaginationService {
    public override reset(): void {
        // do nothing
    }
}
