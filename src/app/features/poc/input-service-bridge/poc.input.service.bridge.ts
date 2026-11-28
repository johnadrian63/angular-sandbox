import { Component, signal } from "@angular/core";

import { PocResourceInputServiceBridgeView } from "./view/poc.input.service.bridge.view";

@Component({
    selector: "app-poc-input-service-bridge",
    templateUrl: "./poc.input.service.bridge.html",
    imports: [PocResourceInputServiceBridgeView]
})
export class PocResourceInputServiceBridge {
    public readonly postId = signal<number>(0);
    public readonly userId = signal<number>(0);
    public readonly testId = signal<number>(0);

    public updatePostId(): void {
        this.postId.update((id: number) => id + 1);
    }

    public updateUserId(): void {
        this.userId.update((id: number) => id + 1);
    }
}
