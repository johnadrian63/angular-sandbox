import { Component, inject } from "@angular/core";
import { JsonPipe } from "@angular/common";

import { ITodoAdapter } from "../model.adapter";
import { PocResourceBasicCollatorService } from "./poc.resource.basic.collator.service";

@Component({
    selector: "app-poc-resource-basic",
    templateUrl: "./poc.resource.basic.html",
    imports: [
        JsonPipe
    ],
    providers: [
        PocResourceBasicCollatorService
    ]
})
export class PocResourceBasic {
    private readonly collatorService = inject<PocResourceBasicCollatorService>(PocResourceBasicCollatorService);

    public get dataSource(): ITodoAdapter | undefined {
        return this.collatorService.dataSource;
    }

    public get isLoading(): boolean {
        return this.collatorService.isLoading();
    }

    public get id(): number {
        return this.collatorService.id();
    }

    public updateNumber(): void {
        this.collatorService.id.update((id: number) => id + 1);
    }
}
