import { NgClass } from "@angular/common";
import { Component, model } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { NavigationDisplay } from "../navigation.display";
import { IMenuItemTarget } from "../../navigation.model";

@Component({
    selector: "app-navigation-display-link",
    templateUrl: "./navigation.display.link.html",
    imports: [RouterLink, RouterLinkActive, NgClass, FaIconComponent]
})
export class NavigationDisplayLink extends NavigationDisplay {
    public readonly iconRight: IconDefinition | null = null;
    public readonly iconLeft: IconDefinition | null = null;

    public readonly target = model<IMenuItemTarget>("_self");
}
