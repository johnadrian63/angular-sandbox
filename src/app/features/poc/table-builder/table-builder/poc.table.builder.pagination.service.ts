import { Injectable } from "@angular/core";

import { TableBuilderPaginationService } from "../../../shared/table-builder";

@Injectable()
export class PocTableBuilderPaginationService extends TableBuilderPaginationService {
    public override handlePageChange(page: number, pageSize: number): void {
        throw new Error("Method not implemented.");
    }

    public override reset(): void {
        throw new Error("Method not implemented.");
    }
}
