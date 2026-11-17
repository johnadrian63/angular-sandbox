import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";

import { UiButtonComponent } from "../../core/ui/button/ui.button.component";
import { UiModalTemplateComponent } from "../../core/ui/modal-template/ui.modal.template.component";
import { ModalBuilderHandlerService } from "./handler/modal.builder.handler.service";
import { ModalBuilderComponent } from "./modal.builder.component";
import { ModalBuilderHeaderComponent } from "./component/header/modal.builder.header.component";
import { ModalBuilderBodyComponent } from "./component/body/modal.builder.body.component";
import { ModalBuilderFooterComponent } from "./component/footer/modal.builder.footer.component";

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        UiModalTemplateComponent,
        UiButtonComponent
    ],
    declarations: [
        ModalBuilderComponent,
        ModalBuilderHeaderComponent,
        ModalBuilderBodyComponent,
        ModalBuilderFooterComponent
    ],
    providers: [
        ModalBuilderHandlerService
    ]
})
export class ModalBuilderModule { }
