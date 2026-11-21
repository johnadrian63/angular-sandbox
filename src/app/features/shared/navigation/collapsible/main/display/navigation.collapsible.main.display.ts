import { Component } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { NavigationCollapsibleBase } from "../../navigation.collapsible.base";
import { NavigationDisplayText } from "../../../display/text/navigation.display.text";

@Component({
    selector: "app-navigation-collapsible-main-display",
    templateUrl: "./navigation.collapsible.main.display.html",
    styleUrl: "./navigation.collapsible.main.display.css",
    imports: [
        FaIconComponent,
        NavigationDisplayText
    ]
})
export class NavigationCollapsibleMainDisplay extends NavigationCollapsibleBase { }