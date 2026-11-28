import { Component, inject, input, InputSignal } from "@angular/core";
import { JsonPipe } from "@angular/common";

import { ITodo } from "../../../shared/external-api/dummyjson/model/todo/todo.model";
import { PocInputServiceBridgeTodoService } from "./poc.input.service.bridge.todo.service";

@Component({
    selector: "app-poc-input-service-bridge-todo",
    templateUrl: "./poc.input.service.bridge.todo.html",
    imports: [JsonPipe],
    providers: [PocInputServiceBridgeTodoService],
})
export class PocResourceInputServiceBridgeTodo {
    public get todo(): ITodo | undefined {
        return this.todoService.todo;
    }

    public get isLoading(): boolean {
        return this.todoService.isLoading;
    }

    public readonly todoId: InputSignal<number> = input.required<number>();

    private readonly todoService: PocInputServiceBridgeTodoService = inject<PocInputServiceBridgeTodoService>(PocInputServiceBridgeTodoService);
    constructor() {
        this.todoService.register({
            todoId: this.todoId
        });
    }
}
