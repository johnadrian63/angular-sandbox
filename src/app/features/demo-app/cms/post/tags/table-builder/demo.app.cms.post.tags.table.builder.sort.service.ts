import { Injectable } from "@angular/core";

import { TableBuilderSortBaseService } from "../../../../../shared/table-builder";

@Injectable()
export class DemoAppCmsPostTagsTableBuilderSortService extends TableBuilderSortBaseService {
    public override init(): void {
        // do nothing
    }

    public override reset(): void {
        // cleanup logic here
    }
}
