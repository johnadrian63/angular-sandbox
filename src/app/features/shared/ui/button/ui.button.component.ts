import { Component } from "@angular/core";
import { NgClass } from "@angular/common";

import { UiButtonAbstractComponent } from "./ui.button.abstract.component";

@Component({
    selector: "app-ui-button",
    templateUrl: "./ui.button.component.html",
    styleUrl: "./ui.button.component.scss",
    imports: [
        NgClass
    ]
})
export class UiButtonComponent extends UiButtonAbstractComponent { }
