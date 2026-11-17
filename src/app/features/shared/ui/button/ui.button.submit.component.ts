import { Component } from "@angular/core";
import { NgClass } from "@angular/common";

import { UiButtonAbstractComponent } from "./ui.button.abstract.component";

@Component({
    selector: "app-ui-button-submit",
    templateUrl: "./ui.button.submit.component.html",
    styleUrl: "./ui.button.component.css",
    imports: [
        NgClass
    ]
})
export class UiButtonSubmitComponent extends UiButtonAbstractComponent { }
