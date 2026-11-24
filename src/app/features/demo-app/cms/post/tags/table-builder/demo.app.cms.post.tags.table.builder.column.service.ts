import { Injectable, ViewContainerRef } from "@angular/core";

import { IPostTagAdapter } from "../demo.app.cms.post.tags.adapter";
import { TableBuilderColumnService } from "../../../../../shared/table-builder";
import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { DataDisplayLinkComponent } from "../../../../../shared/data-display/link";
import { DataDisplayButtonComponent } from "../../../../../shared/data-display/button";
import { DataDisplayTextboxComponent } from "../../../../../shared/data-display/textbox";
import { DataDisplayNumberComponent } from "../../../../../shared/data-display/number";
import { DataDisplayCheckboxComponent } from "../../../../../shared/data-display/checkbox";
import { DataDisplayDateTimeComponent } from "../../../../../shared/data-display/date-time";
import { DataDisplayThumbnailComponent } from "../../../../../shared/data-display/thumbnail";
import { DataDisplaySelectionComponent } from "../../../../../shared/data-display/selection";
import { DataDisplayRadioButtonComponent } from "../../../../../shared/data-display/radio-button";
import { demoAppCmsPostTagsTableBuilderMapper } from "./demo.app.cms.post.tags.table.builder.config";
import { IDataDisplayVisitor } from "../../../../../shared/data-display/data.display.visitor.interface";

@Injectable()
export class DemoAppCmsPostTagsTableBuilderColumnService extends TableBuilderColumnService {
    public override handle(vcr: ViewContainerRef, columnKey: keyof IPostTagAdapter, row: IPostTagAdapter, rowIndex?: number): void {
        const mapper = demoAppCmsPostTagsTableBuilderMapper.get(columnKey);

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

export class DemoAppCmsPostListTableBuilderColumnDataVisitor implements IDataDisplayVisitor<void> {
    constructor(
        protected readonly columnKey: keyof IPostTagAdapter,
        protected readonly row: IPostTagAdapter
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
        throw new Error("Method not implemented.");
    }
}