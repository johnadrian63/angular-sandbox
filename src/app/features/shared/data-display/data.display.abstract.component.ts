import { Component, Input } from "@angular/core";

import { IDataDisplayVisitor } from "./data.display.visitor.interface";

@Component({
    template: ""
})
export abstract class DataDisplayAbstractComponent {
    @Input() public classes: string = "";

    public abstract accept<T>(visitor: IDataDisplayVisitor<T>): T;
}
