import { inject, Injectable, ResourceRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { rxResource } from "@angular/core/rxjs-interop";
import { map, Observable } from "rxjs";

import { ITodoAdapter, ITodoCollection, ITodoFilter, TodoAdapter } from "../model.adapter";
import { PocResourceCollatorSortService } from "./poc.resource.advance.collator.sort.service";
import { DataCollatorService } from "../../../shared/data-collator/migration/data.collator.service";
import { PocResourceCollatorPaginationService } from "./poc.resource.advance.collator.pagination.service";

@Injectable()
export class PocResourceAdvanceCollatorService extends DataCollatorService<ITodoAdapter[]> {
    protected readonly resource: ResourceRef<ITodoAdapter[] | undefined> = rxResource({
        params: () => {
            const limit = this.paginationService.pageSize;
            const skip = this.paginationService.page;
            const sortValues = this.sortService.value();

            const filter: ITodoFilter = {
                skip,
                limit,
                ...sortValues
            };

            return filter;
        },
        stream: ({ params }) => this.fetchData(params),
    });

    private readonly apiUrl = "https://dummyjson.com/todos";
    private readonly httpClient = inject<HttpClient>(HttpClient);
    private readonly paginationService: PocResourceCollatorPaginationService = inject<PocResourceCollatorPaginationService>(PocResourceCollatorPaginationService);
    private readonly sortService: PocResourceCollatorSortService = inject<PocResourceCollatorSortService>(PocResourceCollatorSortService);

    public fetchData(filter: ITodoFilter): Observable<ITodoAdapter[]> {
        return this.httpClient.get<ITodoCollection>(`${this.apiUrl}`, {
            params: {
                ...filter,
                skip: filter.limit * filter.skip,
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

    public override reset(): void {
        // do nothing
    }
}
