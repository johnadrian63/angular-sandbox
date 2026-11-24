import { inject, Injectable } from "@angular/core";

import { TABLE_BUILDER_REFRESH_TOKEN, TableBuilderRefresher } from "../../../../../../shared/table-builder/table.builder.token";
import { TableBuilderPaginationBaseService } from "../../../../../../shared/table-builder/service/table.builder.pagination.base.service";

@Injectable()
export class DemoAppCmsUserViewPostTableBuilderPaginationService extends TableBuilderPaginationBaseService {
    private readonly refresher = inject<TableBuilderRefresher>(TABLE_BUILDER_REFRESH_TOKEN);

    public override init(): void {
        // do nothing
    }

    public override reset(): void {
        // do nothing
    }

    public override handlePageChange(page: number, pageSize: number): void {
        this.refresher.refresh();
    }
}