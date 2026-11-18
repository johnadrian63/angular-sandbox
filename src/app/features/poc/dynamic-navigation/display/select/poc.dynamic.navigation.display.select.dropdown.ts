import { Component, model } from "@angular/core";
import { NgClass } from "@angular/common";

import { NavigationDisplay } from "../../../../shared/navigation/display/navigation.display";

@Component({
    selector: "app-poc-dynamic-navigation-display-select-dropdown",
    templateUrl: "./poc.dynamic.navigation.display.select.dropdown.html",
    imports: [NgClass]
})
export class PocDynamicNavigationDisplaySelectDropdown extends NavigationDisplay { }
