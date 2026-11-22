import { Component, model, ModelSignal } from "@angular/core";

import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { IDataDisplayVisitor } from "../../../../../shared/data-display/data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../../../../../shared/data-display/data.display.abstract.component";

@Component({
    selector: "app-demo-app-cms-post-display-tags",
    templateUrl: "./demo.app.cms.post.display.tags.html",
    imports: [DataDisplayTextComponent]
})
export class DemoAppCmsPostDisplayTags extends DataDisplayAbstractComponent {
    public readonly tags: ModelSignal<string[]> = model.required<string[]>();

    public override accept<T>(visitor: IDemoAppCmsPostDisplayTagsVisitor<T>): T {
        return visitor.visitTags(this);
    }
}

export interface IDemoAppCmsPostDisplayTagsVisitor<T> extends IDataDisplayVisitor<T> {
    visitTags(component: DemoAppCmsPostDisplayTags): T;
}