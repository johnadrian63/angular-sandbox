import { Injectable } from "@angular/core";

import { DataCollatorPaginationRouteService } from "../../../../shared/data-collator/migration/data.collator.pagination.route.service";

@Injectable()
export class DemoAppCmsRecipeListPaginationService extends DataCollatorPaginationRouteService {
    public override reset(): void {
        // do nothing
    }
}