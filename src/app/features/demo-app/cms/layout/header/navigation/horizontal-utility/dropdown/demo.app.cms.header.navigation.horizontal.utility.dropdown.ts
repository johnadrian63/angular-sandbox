import { CdkMenuTrigger } from "@angular/cdk/menu";
import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { NavigationDisplay } from "../../../../../../../shared/navigation/display/navigation.display";
import { NavigationHorizontalCdkDropdownItem } from "../../../../../../../shared/navigation/horizontal/cdk/dropdown/item/navigation.horizontal.cdk.dropdown.item";

@Component({
    selector: "app-demo-app-cms-header-navigation-horizontal-utility-dropdown",
    templateUrl: "./demo.app.cms.header.navigation.horizontal.utility.dropdown.html",
    imports: [
        CdkMenuTrigger,
        NgClass,
        FaIconComponent,
        NavigationHorizontalCdkDropdownItem,
    ],
})
export class DemoAppCmsHeaderNavigationHorizontalUtilityDropdown extends NavigationDisplay {
    public expandIcon = faUser;

    @Input() public menuClass: string = "";
}
