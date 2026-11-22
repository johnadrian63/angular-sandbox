import { Injectable, ViewContainerRef } from "@angular/core";

import { IPostAdapter } from "../../demo.app.post.model";
import { TableBuilderColumnService } from "../../../../../shared/table-builder";
import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { DataDisplayButtonComponent } from "../../../../../shared/data-display/button";
import { DataDisplayCheckboxComponent } from "../../../../../shared/data-display/checkbox";
import { DataDisplayDateTimeComponent } from "../../../../../shared/data-display/date-time";
import { DataDisplayLinkComponent } from "../../../../../shared/data-display/link";
import { DataDisplayNumberComponent } from "../../../../../shared/data-display/number";
import { DataDisplayRadioButtonComponent } from "../../../../../shared/data-display/radio-button";
import { DataDisplaySelectionComponent } from "../../../../../shared/data-display/selection";
import { DataDisplayTextboxComponent } from "../../../../../shared/data-display/textbox";
import { DataDisplayThumbnailComponent } from "../../../../../shared/data-display/thumbnail";
import { IDataDisplayVisitor } from "../../../../../shared/data-display/data.display.visitor.interface";
import { demoAppCmsPostListTableBuilderMapper } from "./demo.app.cms.post.list.table.builder.config";
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

class DemoAppCmsPostListTableBuilderColumnDataVisitor
    implements IDataDisplayVisitor<void>,
    IDemoAppCmsPostDisplayReactionVisitor<void>,
    IDemoAppCmsPostDisplayViewVisitor<void>,
    IDemoAppCmsPostDisplayTextPreviewVisitor<void>,
    IDemoAppCmsPostDisplayTagsVisitor<void> {
    constructor(
        private readonly columnKey: keyof IPostAdapter,
        private readonly row: IPostAdapter
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
        component.classes = "border border-gray-200  p-2 rounded-3xl mr-1 text-xs";
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

    public visitLink(component: DataDisplayLinkComponent): void {
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
