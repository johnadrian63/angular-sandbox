import { NgClass } from "@angular/common";
import { Component } from "@angular/core";

import { NavigationDisplay } from "../navigation.display";

@Component({
    selector: "app-navigation-display-text",
    templateUrl: "./navigation.display.text.html",
    imports: [NgClass]
})
export class NavigationDisplayText extends NavigationDisplay { }
