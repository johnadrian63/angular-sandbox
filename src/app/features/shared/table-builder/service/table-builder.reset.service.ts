import {
    Injectable,
    Optional
} from "@angular/core";

import { DataCollatorResetService } from "../../data-collator";
import { TableBuilderSearchService } from "./table-builder.search.service";
import { TableBuilderSortService } from "./table-builder.sort.service";
import { TableBuilderPaginationService } from "./table-builder.pagination.service";

@Injectable()
export abstract class TableBuilderResetService extends DataCollatorResetService {

    constructor(
        dataCollatorPaginationService: TableBuilderPaginationService,
        dataCollatorSortService: TableBuilderSortService,
        @Optional() dataCollatorSearchService: TableBuilderSearchService,
    ) {
        super(dataCollatorPaginationService, dataCollatorSortService, dataCollatorSearchService);
    }
}
