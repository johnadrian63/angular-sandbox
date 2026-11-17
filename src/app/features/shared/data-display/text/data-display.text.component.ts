import {
    Component,
    Input,
} from "@angular/core";

import { IDataDisplayVisitor } from "../data-display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data-display.abstract.component";

@Component({
    selector: "app-data-display-text-component",
    templateUrl: "./data-display.text.component.html",
    styleUrl: "./data-display.text.component.scss"
})
export class DataDisplayTextComponent extends DataDisplayAbstractComponent {
    // FIXME refactor this!
    @Input() public text!: string;

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        if (visitor.visitText) {
            return visitor.visitText(this);
        }

        throw new Error("refactor this visitor.visitText!");
    }
}
