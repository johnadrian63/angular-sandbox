import { Type } from "@angular/core";

import { DataDisplayAbstractComponent } from "../../../data-display/data-display.abstract.component";

export interface ITableBuilderColumnConfig {
    renderer: Type<DataDisplayAbstractComponent>;
}
