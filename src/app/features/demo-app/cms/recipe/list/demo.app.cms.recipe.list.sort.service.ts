import { Injectable } from "@angular/core";

import { DataCollatorSortRouteService } from "../../../../shared/data-collator/data.collator.sort.route.service";

@Injectable()
export class DemoAppCmsRecipeListSortService extends DataCollatorSortRouteService {
    public override reset(): void {
        // do nothing
    }
}