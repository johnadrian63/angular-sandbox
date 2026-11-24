import { Injectable } from "@angular/core";

import { TableBuilderPaginationBaseService } from "../../../../../shared/table-builder/service/table.builder.pagination.base.service";

@Injectable()
export class DemoAppCmsPostTagsTableBuilderPaginationService extends TableBuilderPaginationBaseService {

    public override get paginationEnabled(): boolean {
        return false;
    }

    public override init(): void {
        // init logic here
    }

    public override handlePageChange(page: number, pageSize: number): void {
        // not supported
    }

    public override reset(): void {
        // cleanup logic here
    }
}
