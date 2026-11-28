import { Injectable } from "@angular/core";

import { ITodo } from "../model";
import { DataCollatorSortService } from "../../../shared/data-collator/migration/data.collator.sort.service";
import { DataCollatorSortRouteService } from "../../../shared/data-collator/migration/data.collator.sort.route.service";

@Injectable()
export class PocResourceCollatorSortService extends DataCollatorSortService {
// export class PocResourceCollatorSortService extends DataCollatorSortRouteService {
    public override sortableKeys: (keyof ITodo)[] = ["userId", "todo", "completed"];

    public override init(): void {
        // do nothing
    }

    public override reset(): void {
        // do nothing
    }
}
