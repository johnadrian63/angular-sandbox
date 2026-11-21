import { Injectable } from "@angular/core";

import { TableBuilderPaginationRouteService } from "../../../../../shared/table-builder/service/table.builder.pagination.route.service";

@Injectable()
export class DemoAppCmsUserListTableBuilderPaginationService extends TableBuilderPaginationRouteService {

    public override reset(): void {
        // cleanup logic here
    }
}
