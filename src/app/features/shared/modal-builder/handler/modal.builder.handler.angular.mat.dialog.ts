import { MatDialogRef } from "@angular/material/dialog";
import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { ModalBuilderHandlerRef } from "./modal.builder.handler.interface";

export class ModalBuilderHandlerAngularMatDialog extends ModalBuilderHandlerRef {
    constructor(
        private readonly dialogRef: MatDialogRef<Component>
    ) {
        super();
    }

    public override onAfterOpened(): Observable<void> {
        return this.dialogRef.afterOpened();
    }

    public override onBeforeClosed(): Observable<void> {
        return this.dialogRef.beforeClosed();
    }

    public override onAfterClosed(): Observable<void> {
        return this.dialogRef.afterClosed();
    }

    public override close(): void {
        this.dialogRef.close();
    }
}
