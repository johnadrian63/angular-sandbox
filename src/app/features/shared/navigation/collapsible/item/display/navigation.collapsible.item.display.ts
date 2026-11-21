import { Component } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { NavigationCollapsibleBase } from "../../navigation.collapsible.base";
import { NavigationDisplayText } from "../../../display/text/navigation.display.text";

@Component({
    selector: "app-navigation-collapsible-item-display",
    templateUrl: "./navigation.collapsible.item.display.html",
    imports: [
        FaIconComponent,
        NavigationDisplayText
    ]
})
export class NavigationCollapsibleItemDisplay extends NavigationCollapsibleBase { }