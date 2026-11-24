import { Injectable } from "@angular/core";

import { TableBuilderSortService } from "../../../../../../shared/table-builder";

@Injectable()
export class DemoAppCmsUserViewPostTableBuilderSortService extends TableBuilderSortService {
    public override reset(): void {
        // cleanup logic here
    }
}
