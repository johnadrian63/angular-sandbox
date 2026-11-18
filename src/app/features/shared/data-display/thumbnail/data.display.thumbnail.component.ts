import {
    Component,
    model,
    ModelSignal,
} from "@angular/core";

import { IDataDisplayVisitor } from "../data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data.display.abstract.component";

@Component({
    selector: "app-data-display-thumbnail",
    templateUrl: "./data.display.thumbnail.component.html"
})
export class DataDisplayThumbnailComponent extends DataDisplayAbstractComponent {
    public readonly thumbnailUrl: ModelSignal<string> = model<string>("");
    public readonly width: ModelSignal<string> = model<string>("");
    public readonly height: ModelSignal<string> = model<string>("");

    public accept<T>(visitor: IDataDisplayVisitor<T>): T {
        return visitor.visitThumbnail(this);
    }
}
