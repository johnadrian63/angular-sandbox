import { Injectable } from "@angular/core";

import { TableBuilderSortService } from "../../../../../shared/table-builder";

@Injectable()
export class DemoAppCmsPostTagsTableBuilderSortService extends TableBuilderSortService {
    public override reset(): void {
        // cleanup logic here
    }
}
