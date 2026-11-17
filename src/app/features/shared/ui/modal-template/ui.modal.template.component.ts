import {
    Component,
    ElementRef,
    Input,
    ViewChild
} from "@angular/core";
import {
    MatDialogModule,
    MatDialogRef
} from "@angular/material/dialog";

@Component({
    selector: "app-ui-modal-template",
    templateUrl: "./ui.modal.template.component.html",
    styleUrl: "./ui.modal.template.component.scss",
    imports: [
        MatDialogModule
    ]
})
export class UiModalTemplateComponent {
    // FIXME refactor this!
    @Input() public headerClass!: string;

    // FIXME refactor this!
    @Input() public bodyClass!: string;

    // FIXME refactor this!
    @Input() public footerClass!: string;

    // FIXME refactor this!
    @ViewChild("modalBodyRef", { read: ElementRef, static: true }) public readonly modalBodyRef!: ElementRef<HTMLElement>;

    constructor(
        private readonly dialogRef: MatDialogRef<UiModalTemplateComponent>
    ) { }

    public close(): void {
        this.dialogRef.close();
    }
}
