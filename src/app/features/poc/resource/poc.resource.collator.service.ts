import { inject, Injectable, resource, ResourceRef, signal, WritableSignal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { rxResource } from "@angular/core/rxjs-interop";
import { lastValueFrom } from "rxjs";

import { ITodoAdapter, TodoAdapter } from "./model.adapter";
import { DataCollatorService } from "./data.collator.service";

@Injectable()
export class PocResourceCollatorService extends DataCollatorService<ITodoAdapter | undefined> {
    protected resource: ResourceRef<ITodoAdapter | undefined> = rxResource({
        params: () => {
            return { id: this.id() };
        },
        stream: ({ params }) => this.httpClient.get<ITodoAdapter | undefined>(`${this.apiUrl}/${params.id}`)
    });

    /**
     *  @description promise-based resource using resource()
     * */
    // protected resource: ResourceRef<ITodoAdapter | undefined> = resource({
    //     params: () => {
    //         return { id: this.id() };
    //     },
    //     loader: ({ params, abortSignal }) => this.fetchUser(params, abortSignal)
    // });

    public readonly id: WritableSignal<number> = signal<number>(1);

    private readonly httpClient = inject<HttpClient>(HttpClient);
    private readonly apiUrl = "https://dummyjson.com/todos";

    protected async fetchUser(params: any, abortSignal: AbortSignal): Promise<ITodoAdapter> {
        const result = await lastValueFrom(this.httpClient.get<ITodoAdapter>(`${this.apiUrl}/${params.id}`));

        return new TodoAdapter(result);
    }
}
