import { Component, model, ModelSignal } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import { IReaction } from "../../demo.app.cms.post.model";
import { IDataDisplayVisitor } from "../../../../../shared/data-display/data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../../../../../shared/data-display/data.display.abstract.component";

@Component({
    selector: "app-demo-app-cms-post-display-reaction",
    templateUrl: "./demo.app.cms.post.display.reaction.html",
    imports: [FaIconComponent]
})
export class DemoAppCmsPostDisplayReaction extends DataDisplayAbstractComponent {
    public readonly reaction: ModelSignal<IReaction> = model.required<IReaction>();
    public readonly thumbsUpIcon = faThumbsUp;
    public readonly thumbsDownIcon = faThumbsDown;

    public override accept<T>(visitor: IDemoAppCmsPostDisplayReactionVisitor<T>): T {
        return visitor.visitReaction(this);
    }
}

export interface IDemoAppCmsPostDisplayReactionVisitor<T> extends IDataDisplayVisitor<T> {
    visitReaction(component: DemoAppCmsPostDisplayReaction): T;
}