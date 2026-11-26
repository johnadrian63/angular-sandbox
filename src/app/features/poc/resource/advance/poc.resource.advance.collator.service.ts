import { inject, Injectable, resource, ResourceRef, signal, WritableSignal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { rxResource } from "@angular/core/rxjs-interop";
import { map, Observable } from "rxjs";

import { DataCollatorService } from "../data-collator/data.collator.service";
import { ITodoAdapter, ITodoCollection, ITodoFilter, TodoAdapter } from "../model.adapter";
import { PocResourceCollatorPaginationService } from "./poc.resource.advance.collator.pagination.service";
import { PocResourceCollatorPaginationRouteService } from "./poc.resource.advance.collator.pagination.route.service";

@Injectable()
export class PocResourceAdvanceCollatorService extends DataCollatorService<ITodoAdapter[]> {
    protected readonly resource: ResourceRef<ITodoAdapter[] | undefined> = rxResource({
        params: () => {
            const limit = this.paginationService.pageSize;
            const skip = limit * this.paginationService.page;
            const filter: ITodoFilter = {
                skip,
                limit,
            };

            return filter;
        },
        stream: ({ params }) => this.fetchData(params),
    });

    private readonly apiUrl = "https://dummyjson.com/todos";
    private readonly httpClient = inject<HttpClient>(HttpClient);
    // private readonly paginationService: PocResourceCollatorPaginationService = inject<PocResourceCollatorPaginationService>(PocResourceCollatorPaginationService);
    private readonly paginationService: PocResourceCollatorPaginationRouteService = inject<PocResourceCollatorPaginationRouteService>(PocResourceCollatorPaginationRouteService);

    public fetchData(filter: ITodoFilter): Observable<ITodoAdapter[]> {
        return this.httpClient.get<ITodoCollection>(`${this.apiUrl}`, {
            params: {
                ...filter
            }
        }).pipe(map((result: ITodoCollection) => {
            this.paginationService.setCount(result.total);

            const todos: ITodoAdapter[] = [];

            for (let i = 0; i < result.todos.length; i++) {
                const todo = result.todos[i];
                const adapter = new TodoAdapter(todo);

                todos.push(adapter);
            }

            return todos;
        }));
    }
}
