import { Injectable } from "@angular/core";

import { DataCollatorPaginationRouteService } from "../../../../shared/data-collator";

@Injectable()
export class DemoAppCmsRecipeListPaginationService extends DataCollatorPaginationRouteService {
    public override reset(): void {
        // do nothing
    }
}