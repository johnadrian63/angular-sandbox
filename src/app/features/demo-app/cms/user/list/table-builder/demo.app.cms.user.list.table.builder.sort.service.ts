import { Injectable } from "@angular/core";

import { TableBuilderSortRouteService } from "../../../../../shared/table-builder/service/table.builder.sort.route.service";

@Injectable()
export class DemoAppCmsUserListTableBuilderSortService extends TableBuilderSortRouteService {
    public override reset(): void {
        // do nothing
    }
}
