import { Injectable } from "@angular/core";

import { TableBuilderPaginationRouteService } from "../../../../shared/table-builder/service/table.builder.pagination.route.service";

@Injectable()
export class DemoAppCmsQuoteTableBuilderPaginationService extends TableBuilderPaginationRouteService {
    public override reset(): void {
        // do nothing
    }
}
