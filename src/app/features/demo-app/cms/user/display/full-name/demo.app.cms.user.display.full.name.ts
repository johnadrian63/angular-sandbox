import { Component, inject, model, ModelSignal } from "@angular/core";
import { NgClass } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

import { DataDisplayLinkComponent } from "../../../../../shared/data-display/link";
import { DataDisplayThumbnailComponent } from "../../../../../shared/data-display/thumbnail";
import { IDataDisplayVisitor } from "../../../../../shared/data-display/data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../../../../../shared/data-display/data.display.abstract.component";

@Component({
    selector: "app-demo-app-cms-user-display-full-name",
    templateUrl: "./demo.app.cms.user.display.full.name.html",
    imports: [
        NgClass,
        DataDisplayThumbnailComponent,
        DataDisplayLinkComponent
    ]
})
export class DemoAppCmsUserDisplayFullName extends DataDisplayAbstractComponent {
    public readonly name: ModelSignal<string> = model.required<string>();
    public readonly imageUrl: ModelSignal<string> = model.required<string>();
    public readonly url: ModelSignal<string> = model.required<string>();

    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    public override accept<T>(visitor: IDemoAppCmsUserDisplayFullNameVisitor<T>): T {
        return visitor.visitFullName(this);
    }
}

export interface IDemoAppCmsUserDisplayFullNameVisitor<T> extends IDataDisplayVisitor<T> {
    visitFullName(component: DemoAppCmsUserDisplayFullName): T;
}