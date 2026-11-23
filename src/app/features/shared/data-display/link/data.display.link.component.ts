import { Component, model, ModelSignal } from "@angular/core";
import { NgClass, NgTemplateOutlet } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";

import { IDataDisplayVisitor } from "../data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data.display.abstract.component";

@Component({
    selector: "app-data-display-link",
    templateUrl: "./data.display.link.component.html",
    imports: [
        RouterLink,
        RouterLinkActive,
        NgClass,
        NgTemplateOutlet
    ]
})
export class DataDisplayLinkComponent extends DataDisplayAbstractComponent {

    public get isExternal(): boolean {
        const path = this.url();

        return !!path && typeof path === "string" && /^https?:\/\//i.test(path);
    }

    public readonly text: ModelSignal<string> = model<string>("");
    public readonly url: ModelSignal<string> = model<string>("");

    public activeClass: string = "underline";

    public readonly target = model<string>("_self");

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        return visitor.visitLink(this);
    }
}
