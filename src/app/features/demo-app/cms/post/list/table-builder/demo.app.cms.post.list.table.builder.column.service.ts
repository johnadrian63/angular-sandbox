import { Injectable, ViewContainerRef } from "@angular/core";

import { IPostAdapter } from "../../demo.app.cms.post.model.adapter";
import { TableBuilderColumnService } from "../../../../../shared/table-builder";
import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { DataDisplayLinkComponent } from "../../../../../shared/data-display/link";
import { DataDisplayButtonComponent } from "../../../../../shared/data-display/button";
import { DataDisplayNumberComponent } from "../../../../../shared/data-display/number";
import { DataDisplayTextboxComponent } from "../../../../../shared/data-display/textbox";
import { DataDisplayCheckboxComponent } from "../../../../../shared/data-display/checkbox";
import { DataDisplayDateTimeComponent } from "../../../../../shared/data-display/date-time";
import { DataDisplaySelectionComponent } from "../../../../../shared/data-display/selection";
import { DataDisplayThumbnailComponent } from "../../../../../shared/data-display/thumbnail";
import { DataDisplayRadioButtonComponent } from "../../../../../shared/data-display/radio-button";
import { demoAppCmsPostListTableBuilderMapper } from "./demo.app.cms.post.list.table.builder.config";
import { IDataDisplayVisitor } from "../../../../../shared/data-display/data.display.visitor.interface";
import { DemoAppCmsPostDisplayView, IDemoAppCmsPostDisplayViewVisitor } from "../../display/view/demo.app.cms.post.display.view";
import { DemoAppCmsPostDisplayTags, IDemoAppCmsPostDisplayTagsVisitor } from "../../display/tags/demo.app.cms.post.display.tags";
import { DemoAppCmsPostDisplayReaction, IDemoAppCmsPostDisplayReactionVisitor } from "../../display/reaction/demo.app.cms.post.display.reaction";
import { DemoAppCmsPostDisplayTextPreview, IDemoAppCmsPostDisplayTextPreviewVisitor } from "../../display/text-preview/demo.app.cms.post.display.text.preview";

@Injectable()
export class DemoAppCmsPostListTableBuilderColumnService extends TableBuilderColumnService {
    public handle(vcr: ViewContainerRef, columnKey: keyof IPostAdapter, row: IPostAdapter): void {
        const mapper = demoAppCmsPostListTableBuilderMapper.get(columnKey);

        this.render(
            vcr,
            mapper!,
            new DemoAppCmsPostListTableBuilderColumnDataVisitor(
                columnKey,
                row
            )
        );
    }
}

export class DemoAppCmsPostListTableBuilderColumnDataVisitor
    implements IDataDisplayVisitor<void>,
    IDemoAppCmsPostDisplayReactionVisitor<void>,
    IDemoAppCmsPostDisplayViewVisitor<void>,
    IDemoAppCmsPostDisplayTextPreviewVisitor<void>,
    IDemoAppCmsPostDisplayTagsVisitor<void> {
    constructor(
        protected readonly columnKey: keyof IPostAdapter,
        protected readonly row: IPostAdapter
    ) { }

    public visitText(component: DataDisplayTextComponent): void {
        const value = <string>this.row[this.columnKey];

        component.text.set(value);
    }

    public visitReaction(component: DemoAppCmsPostDisplayReaction): void {
        component.reaction.set(this.row.reactions);
    }

    public visitView(component: DemoAppCmsPostDisplayView) {
        component.view.set(this.row.views);
    }

    public visitTextPreview(component: DemoAppCmsPostDisplayTextPreview): void {
        component.text.set(this.row.body);
        component.maxLength.set(30);
    }

    public visitTags(component: DemoAppCmsPostDisplayTags): void {
        component.tags.set(this.row.tags);
    }

    public visitLink(component: DataDisplayLinkComponent): void {
        const value = <string>this.row[this.columnKey];

        component.url.set(`view/${this.row.id}`);
        component.returnUrlEnabled.set(true);
        component.text.set(value);
    }

    public visitRadioButton(component: DataDisplayRadioButtonComponent): void {
        throw new Error("Method not implemented.");
    }

    public visitSelection(component: DataDisplaySelectionComponent): void {
        throw new Error("Method not implemented.");
    }

    public visitCheckbox(component: DataDisplayCheckboxComponent): void {
        throw new Error("Method not implemented.");
    }

    public visitButton(component: DataDisplayButtonComponent): void {
        throw new Error("Method not implemented.");
    }

    public visitNumber(component: DataDisplayNumberComponent): void {
        throw new Error("Method not implemented.");
    }

    public visitTextbox(component: DataDisplayTextboxComponent): void {
        throw new Error("Method not implemented.");
    }

    public visitDateTime(component: DataDisplayDateTimeComponent): void {
        throw new Error("Method not implemented.");
    }

    public visitThumbnail(component: DataDisplayThumbnailComponent): void {
        const value = <string>this.row[this.columnKey];

        component.url.set(value);
        component.height.set("70");
        component.width.set("70");
    }
}
