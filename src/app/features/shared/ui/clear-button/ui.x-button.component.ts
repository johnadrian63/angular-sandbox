import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { UiLinkComponent } from "../link/ui.link.component";

@Component({
    selector: "app-ui-x-button",
    templateUrl: "./ui.x.button.component.html",
    imports: [
        ReactiveFormsModule,
        UiLinkComponent
    ]
})
export class UiInputComponent { }
