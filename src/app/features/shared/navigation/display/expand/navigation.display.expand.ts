import { Component, output } from "@angular/core";
import { NgClass } from "@angular/common";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { NavigationDisplay } from "../navigation.display";

@Component({
    selector: "app-navigation-display-expand",
    templateUrl: "./navigation.display.expand.html",
    imports: [NgClass, FaIconComponent]
})
export class NavigationDisplayExpand extends NavigationDisplay {
    public readonly onClick = output<void>();

    public expandIcon = faAngleRight;
}
