import {
    Injectable,
    Injector
} from "@angular/core";
import {
    MatDialog,
    MatDialogConfig
} from "@angular/material/dialog";

import {
    IModalBuilderConfig,
    IModalBuilderHandlerRef,
    IModalBuilderHandlerService,
    ModalBuilderRenderer
} from "./modal.builder.handler.interface";
import { ModalBuilderHandlerAngularMatDialog } from "./modal.builder.handler.angular.mat.dialog";

@Injectable()
export class ModalBuilderHandlerService implements IModalBuilderHandlerService {
    constructor(
        private readonly dialogService: MatDialog
    ) { }

    public open<T>(renderer: ModalBuilderRenderer<T>, config: IModalBuilderConfig): IModalBuilderHandlerRef {
        const matDialogConfig: MatDialogConfig = {
            data: config.data,
            height: config.height,
            width: config.width,
            minHeight: config.minHeight,
            minWidth: config.minWidth,
            autoFocus: config.focus,
            injector: Injector.create({
                // FIXME refactor this!
                providers: config.providers!
            })
        };

        
        throw new Error("refactor this!!!!!");
        
        // const modalRef = this.dialogService.open(renderer, matDialogConfig);
        // return new ModalBuilderHandlerAngularMatDialog(modalRef);
    }
}
