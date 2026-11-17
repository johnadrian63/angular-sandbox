import {
    Component,
    OnInit,
    ViewChild,
    ViewContainerRef
} from "@angular/core";

import { ModalBuilderService } from "./modal.builder.service";
import { UiModalTemplateComponent } from "../ui/modal-template/ui.modal.template.component";

@Component({
    selector: "app-modal-builder-component",
    templateUrl: "./modal.builder.component.html",
    imports: [
        UiModalTemplateComponent
    ]
})
export class ModalBuilderComponent implements OnInit {
    // FIXME refactor this! use viewChild()!
    @ViewChild("headerVcr", { read: ViewContainerRef, static: true }) private readonly headerVcr!: ViewContainerRef;
    // FIXME refactor this! use viewChild()!

    @ViewChild("bodyVcr", { read: ViewContainerRef, static: true }) private readonly bodyVcr!: ViewContainerRef;

    // FIXME refactor this! use viewChild()!
    @ViewChild("footerVcr", { read: ViewContainerRef, static: true }) private readonly footerVcr!: ViewContainerRef;

    public get bodyClass(): string {
        return this.modalBuilderService.bodyClass;
    }

    constructor(
        private readonly modalBuilderService: ModalBuilderService
    ) { }

    public ngOnInit(): void {
        this.modalBuilderService.handleModalHeader(this.headerVcr);
        this.modalBuilderService.handleModalBody(this.bodyVcr);
        this.modalBuilderService.handleModalFooter(this.footerVcr);
    }
}
