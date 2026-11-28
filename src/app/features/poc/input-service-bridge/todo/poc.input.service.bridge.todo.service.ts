import { inject, Injectable, InputSignal, resource } from "@angular/core";
import { lastValueFrom } from "rxjs";

import { ITodo } from "../../../shared/external-api/dummyjson/model/todo/todo.model";
import { DummyJsonTodoService } from "../../../shared/external-api/dummyjson/dummyjson.todo.service";

interface IInputDeps {
    todoId: InputSignal<number>;
}

export interface ITodoResourceParam {
    todoId: number;
}

@Injectable()
export class PocInputServiceBridgeTodoService {
    public get todo(): ITodo | undefined {
        return this.todoResource.value();
    }

    public get isLoading(): boolean {
        return this.todoResource.isLoading();
    }

    private readonly todoResource = resource({
        params: () => {
            if (!this.deps) {
                return undefined;
            }

            return {
                todoId: this.deps.todoId(),
            } satisfies ITodoResourceParam;
        },
        loader: ({ params }) => this.fetchData(params)
    });
    private readonly todoService = inject<DummyJsonTodoService>(DummyJsonTodoService);
    private deps!: IInputDeps;

    public register(deps: IInputDeps): void {
        this.deps = deps;
    }

    private async fetchData(params: ITodoResourceParam): Promise<ITodo> {
        return await lastValueFrom(this.todoService.getTodo(params.todoId));
    }
}
