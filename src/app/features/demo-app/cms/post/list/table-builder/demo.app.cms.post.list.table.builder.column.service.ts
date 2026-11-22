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

@Injectable()
export class DemoAppCmsPostListTableBuilderColumnService extends TableBuilderColumnService {
    public handle(vcr: ViewContainerRef, columnKey: keyof IPostAdapter, row: IPostAdapter): void {
        const mapper = demoAppCmsPostListTableBuilderMapper.get(columnKey);

        this.render(
            vcr,
            mapper!,
            new BadgeManagerListTableBuilderColumnDataVisitor(
                columnKey,
                row
            )
        );
    }
}

class BadgeManagerListTableBuilderColumnDataVisitor implements IDataDisplayVisitor<void> {
    constructor(
        private readonly columnKey: keyof IPostAdapter,
        private readonly row: IPostAdapter
    ) { }

    public visitText(component: DataDisplayTextComponent): void {
        const value = <string>this.row[this.columnKey];

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

        component.thumbnailUrl.set(value);
        component.height.set("70");
        component.width.set("70");
    }
}
