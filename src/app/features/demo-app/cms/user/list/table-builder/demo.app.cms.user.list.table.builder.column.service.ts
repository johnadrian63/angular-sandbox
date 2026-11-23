import { Injectable, ViewContainerRef } from "@angular/core";

import { IUserAdapter } from "../../demo.app.cms.user.model";
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
import { demoAppCmsUserListTableBuilderMapper } from "./demo.app.cms.user.list.table.builder.config";
import { DemoAppCmsUserDisplayRole, IDemoAppCmsUserDisplayRoleVisitor } from "../../display/role/demo.app.cms.user.display.role";
import { DemoAppCmsUserDisplayFullName, IDemoAppCmsUserDisplayFullNameVisitor } from "../../display/full-name/demo.app.cms.user.display.full.name";

@Injectable()
export class DemoAppCmsUserListTableBuilderColumnService extends TableBuilderColumnService {
    public handle(vcr: ViewContainerRef, columnKey: keyof IUserAdapter, row: IUserAdapter): void {
        const mapper = demoAppCmsUserListTableBuilderMapper.get(columnKey);

        this.render(
            vcr,
            mapper!,
            new DemoAppCmsUserListTableBuilderDataVisitor(
                columnKey,
                row
            )
        );
    }
}

class DemoAppCmsUserListTableBuilderDataVisitor implements
    IDataDisplayVisitor<void>,
    IDemoAppCmsUserDisplayRoleVisitor<void>,
    IDemoAppCmsUserDisplayFullNameVisitor<void> {

    constructor(
        private readonly columnKey: keyof IUserAdapter,
        private readonly row: IUserAdapter
    ) { }

    public visitText(component: DataDisplayTextComponent): void {
        const value = <string>this.row[this.columnKey];

        component.text.set(value);
    }

    public visitRole(component: DemoAppCmsUserDisplayRole): void {
        component.role.set(this.row.role);
    }

    public visitFullName(component: DemoAppCmsUserDisplayFullName): void {
        component.name.set(this.row.fullName);
        component.imageUrl.set(this.row.image);
        component.url.set(`../view/${this.row.id}`);
        component.classes = "rounded-full border-2 overflow-hidden";
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
