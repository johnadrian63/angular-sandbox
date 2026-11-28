import { Component, signal, WritableSignal } from "@angular/core";

import { PocResourceInputServiceBridgeTodo } from "./todo/poc.input.service.bridge.todo";
import { PocResourceInputServiceBridgePost } from "./post/poc.input.service.bridge.post";

@Component({
    selector: "app-poc-input-service-bridge",
    templateUrl: "./poc.input.service.bridge.html",
    imports: [PocResourceInputServiceBridgeTodo, PocResourceInputServiceBridgePost]
})
export class PocResourceInputServiceBridge {
    public readonly todoId: WritableSignal<number> = signal<number>(1);
    public readonly postId: WritableSignal<number> = signal<number>(1);

    public nextTodo(): void {
        this.todoId.update((todoId: number) => todoId + 1);
    }

    public nextPost(): void {
        this.postId.update((postId: number) => postId + 1);
    }
}
