import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Observable } from "rxjs";

import { ITodo } from "./model/todo/todo.model";

@Service()
export class DummyJsonTodoService {
    private readonly apiUrl = "https://dummyjson.com/todos";
    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);

    public getTodo(todoId: number): Observable<ITodo> {
        return this.httpClient.get<ITodo>(`${this.apiUrl}/${todoId}`);
    }
}
