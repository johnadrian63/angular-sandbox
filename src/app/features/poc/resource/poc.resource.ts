import { Component, inject, ResourceRef } from "@angular/core";
import { JsonPipe } from "@angular/common";

import { ITodoAdapter } from "./model.adapter";
import { PocResourceCollatorService } from "./poc.resource.collator.service";

@Component({
    selector: "app-poc-resource",
    templateUrl: "./poc.resource.html",
    imports: [
        JsonPipe
    ],
    providers: [
        PocResourceCollatorService
    ]
})
export class PocResource {
    private readonly collatorService = inject<PocResourceCollatorService>(PocResourceCollatorService);

    public get resource(): ResourceRef<ITodoAdapter | undefined> {
        return this.collatorService.resource;
    }

    public get id(): number {
        return this.collatorService.id();
    }

    public updateNumber(): void {
        this.collatorService.id.update((id: number) => id + 1);
    }
}
