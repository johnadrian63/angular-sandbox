import { Component } from "@angular/core";

import { IDataDisplayVisitor } from "./data-display.visitor.interface";

@Component({
    selector: "app-table-builder-cell-abstract-component",
    template: ""
})
export abstract class DataDisplayAbstractComponent {
    public abstract accept<T>(visitor: IDataDisplayVisitor<T>): T;
}
