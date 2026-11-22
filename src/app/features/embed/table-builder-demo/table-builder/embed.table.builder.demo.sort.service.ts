import { Injectable } from "@angular/core";

import { TableBuilderSortService } from "../../../shared/table-builder";

@Injectable()
export class EmbedTableBuilderSortService extends TableBuilderSortService {
    public override reset(): void {
        throw new Error("Method not implemented.");
    }
}
