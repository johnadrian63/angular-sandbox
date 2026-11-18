import {
    Component,
    model,
    ModelSignal
} from "@angular/core";

import { IDataDisplayVisitor } from "../data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data.display.abstract.component";

@Component({
    selector: "app-data-display-link",
    templateUrl: "./data.display.link.component.html"
})
export class DataDisplayLinkComponent extends DataDisplayAbstractComponent {
    public readonly text: ModelSignal<string> = model<string>("");
    public readonly url: ModelSignal<string> = model<string>("");

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        return visitor.visitLink(this);
    }
}
