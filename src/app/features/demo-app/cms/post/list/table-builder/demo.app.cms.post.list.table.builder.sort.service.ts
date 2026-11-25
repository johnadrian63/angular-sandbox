import { Injectable } from "@angular/core";

import { TableBuilderSortRouteService } from "../../../../../shared/table-builder/service/table.builder.sort.route.service";

@Injectable()
export class DemoAppCmsPostListTableBuilderSortService extends TableBuilderSortRouteService {
    public override reset(): void {
        // cleanup logic here
    }
}
