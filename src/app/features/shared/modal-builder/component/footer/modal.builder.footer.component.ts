import { Component } from "@angular/core";

import { ModalBuilderService } from "../../modal.builder.service";
import { UiButtonComponent } from "../../../ui/button/ui.button.component";

@Component({
    selector: "app-modal-builder-footer-component",
    templateUrl: "./modal.builder.footer.component.html",
    styleUrl: "./modal.builder.footer.component.scss",
    imports: [UiButtonComponent]
})
export class ModalBuilderFooterComponent {
    constructor(
        private readonly modalBuilderService: ModalBuilderService
    ) { }

    public submit(): void {
        this.modalBuilderService.handleSubmit();
    }

    public close(): void {
        this.modalBuilderService.close();
    }
}
