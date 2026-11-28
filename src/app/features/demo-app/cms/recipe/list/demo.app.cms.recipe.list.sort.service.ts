import { Injectable } from "@angular/core";

import { DataCollatorSortRouteService } from "../../../../shared/data-collator/data.collator.sort.route.service";

@Injectable()
export class DemoAppCmsRecipeListSortService extends DataCollatorSortRouteService {
    protected override sortableKeys: string[] = [];

    public override init(): void {
        // throw new Error("Method not implemented.");
    }
    public override reset(): void {
        // do nothing
    }
}