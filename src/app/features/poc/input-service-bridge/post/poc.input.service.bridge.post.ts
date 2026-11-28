import { Component, inject, input, InputSignal } from "@angular/core";
import { JsonPipe } from "@angular/common";

import { IPost } from "../../../shared/external-api/dummyjson/model/post/post.model";
import { PocInputServiceBridgePostService } from "./poc.input.service.bridge.post.service";

@Component({
    selector: "app-poc-input-service-bridge-post",
    templateUrl: "./poc.input.service.bridge.post.html",
    imports: [JsonPipe],
    providers: [PocInputServiceBridgePostService],
})
export class PocResourceInputServiceBridgePost {
    public get post(): IPost | undefined {
        return this.postService.post;
    }

    public get isLoading(): boolean {
        return this.postService.isLoading;
    }

    public readonly postId: InputSignal<number> = input.required<number>();

    private readonly postService: PocInputServiceBridgePostService = inject<PocInputServiceBridgePostService>(PocInputServiceBridgePostService);

    constructor() {
        this.postService.register({
            postId: this.postId,
        });
    }
}
