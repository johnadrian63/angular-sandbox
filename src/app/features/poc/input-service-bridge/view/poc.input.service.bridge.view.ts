import { Component, inject, input } from "@angular/core";

import { PocResourceInputServiceBridgeService } from "./poc.input.service.bridge.service";

@Component({
    selector: "app-poc-input-service-bridge-view",
    templateUrl: "./poc.input.service.bridge.view.html",
    providers: [PocResourceInputServiceBridgeService]
})
export class PocResourceInputServiceBridgeView {
    public userId = input.required<number>();
    public postId = input.required<number>();

    private readonly service = inject<PocResourceInputServiceBridgeService>(PocResourceInputServiceBridgeService);

    constructor() {
        this.service.register({
            userId: this.userId,
            postId: this.postId,
        });
    }
}
