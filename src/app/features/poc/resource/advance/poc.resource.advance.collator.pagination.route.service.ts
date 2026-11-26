import { Injectable } from "@angular/core";

import { DataCollatorPaginationRouteService } from "../data-collator/data.collator.pagination.route.service";

@Injectable()
export class PocResourceCollatorPaginationRouteService extends DataCollatorPaginationRouteService {
    public override reset(): void {
        // do nothing
    }
}
