import {
    Component,
    Input,
} from "@angular/core";

import { IDataDisplayVisitor } from "../data-display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data-display.abstract.component";

@Component({
    selector: "app-data-display-thumbnail-component",
    templateUrl: "./data-display.thumbnail.component.html",
    styleUrl: "./data-display.thumbnail.component.scss"
})
export class DataDisplayThumbnailComponent extends DataDisplayAbstractComponent {
    // FIXME refactor this!
    @Input() public thumbnailUrl!: string;

    public accept<T>(visitor: IDataDisplayVisitor<T>): T {
        if (visitor.visitThumbnail) {
            return visitor.visitThumbnail(this);
        }

        throw new Error("refactor thisvisitor.visitThumbnail!");
    }
}
