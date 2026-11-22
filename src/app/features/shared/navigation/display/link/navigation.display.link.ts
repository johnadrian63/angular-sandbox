import { NgClass, NgTemplateOutlet } from "@angular/common";
import { Component, model } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { IMenuItemTarget } from "../../navigation.model";
import { NavigationDisplay } from "../navigation.display";

@Component({
    selector: "app-navigation-display-link",
    templateUrl: "./navigation.display.link.html",
    imports: [
        RouterLink,
        RouterLinkActive,
        NgClass,
        FaIconComponent,
        NgTemplateOutlet
    ]
})
export class NavigationDisplayLink extends NavigationDisplay {

    public get isExternal(): boolean {
        const path = this.menu().path;

        return !!path && typeof path === "string" && /^https?:\/\//i.test(path);
    }

    public iconRight: IconDefinition | null = null;
    public iconLeft: IconDefinition | null = null;
    public activeClass: string = "underline";

    public readonly target = model<IMenuItemTarget>("_self");
}
