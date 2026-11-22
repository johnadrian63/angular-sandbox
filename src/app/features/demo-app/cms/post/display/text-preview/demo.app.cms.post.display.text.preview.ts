import { Component, model, ModelSignal } from "@angular/core";
import { SlicePipe } from "@angular/common";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { IDataDisplayVisitor } from "../../../../../shared/data-display/data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../../../../../shared/data-display/data.display.abstract.component";

@Component({
    selector: "app-demo-app-cms-post-display-text-preview",
    templateUrl: "./demo.app.cms.post.display.text.preview.html",
    imports: [SlicePipe]
})
export class DemoAppCmsPostDisplayTextPreview extends DataDisplayAbstractComponent {
    public readonly text: ModelSignal<string> = model.required<string>();
    public readonly maxLength: ModelSignal<number> = model<number>(60);
    public readonly icon = faEye;

    public override accept<T>(visitor: IDemoAppCmsPostDisplayTextPreviewVisitor<T>): T {
        return visitor.visitTextPreview(this);
    }
}

export interface IDemoAppCmsPostDisplayTextPreviewVisitor<T> extends IDataDisplayVisitor<T> {
    visitTextPreview(component: DemoAppCmsPostDisplayTextPreview): T;
}