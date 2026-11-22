import { Component } from "@angular/core";
import { NgClass } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { NavigationCollapsibleSingleBase } from "../../navigation.collapsible.base";
import { NavigationDisplayText } from "../../../display/text/navigation.display.text";

@Component({
    selector: "app-navigation-collapsible-main-display-single",
    templateUrl: "./navigation.collapsible.main.display.single.html",
    styleUrl: "../navigation.collapsible.main.display.css",
    imports: [
        FaIconComponent,
        RouterLink,
        RouterLinkActive,
        NgClass,
        NavigationDisplayText
    ]
})
export class NavigationCollapsibleMainDisplaySingle extends NavigationCollapsibleSingleBase { }
