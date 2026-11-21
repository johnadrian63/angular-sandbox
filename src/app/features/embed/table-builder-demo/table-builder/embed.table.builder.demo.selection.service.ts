import { Injectable } from "@angular/core";

import { TableBuilderSelectionService } from "../../../shared/table-builder";

@Injectable()
export class EmbedTableBuilderSelectionService extends TableBuilderSelectionService {
    public override get masterSelectionEnabled(): boolean {
        return false;
    }
}
