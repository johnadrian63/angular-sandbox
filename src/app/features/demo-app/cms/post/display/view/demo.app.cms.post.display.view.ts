import { Component, model, ModelSignal } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { IDataDisplayVisitor } from "../../../../../shared/data-display/data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../../../../../shared/data-display/data.display.abstract.component";

@Component({
    selector: "app-demo-app-cms-post-display-view",
    templateUrl: "./demo.app.cms.post.display.view.html",
    imports: [FaIconComponent, DataDisplayTextComponent]
})
export class DemoAppCmsPostDisplayView extends DataDisplayAbstractComponent {
    public readonly view: ModelSignal<number> = model.required<number>();
    public readonly icon = faEye;

    public override accept<T>(visitor: IDemoAppCmsPostDisplayViewVisitor<T>): T {
        return visitor.visitView(this);
    }
}

export interface IDemoAppCmsPostDisplayViewVisitor<T> extends IDataDisplayVisitor<T> {
    visitView(component: DemoAppCmsPostDisplayView): T;
}