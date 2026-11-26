import { inject, Injectable, ResourceRef, signal, WritableSignal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { rxResource } from "@angular/core/rxjs-interop";

import { ITodoAdapter, TodoAdapter } from "./model.adapter";
import { DataCollatorService } from "./data.collator.service";

@Injectable()
export class PocResourceCollatorService extends DataCollatorService<ITodoAdapter | undefined> {
    private readonly apiUrl = "https://dummyjson.com/todos";

    public override get dataSource(): ITodoAdapter | undefined {
        return this.resource.value();
    }

    public readonly resource = this.createResource();

    private readonly httpClient = inject<HttpClient>(HttpClient);

    public readonly id: WritableSignal<number> = signal<number>(1);

    /**
     * @description observable-based resource using rxResource()
     *  */
    public override createResource(): ResourceRef<ITodoAdapter | undefined> {
        return rxResource({
            params: () => {
                return { id: this.id() };
            },
            stream: () => this.httpClient.get<ITodoAdapter | undefined>(`${this.apiUrl}/${this.id()}`)
        });
    }

    /**
     * @description promise-based resource using resource()
     */
    // public createResource(): ResourceRef<ITodoCollection | undefined> {
    //     return resource({
    //         params: () => {
    //             return { id: 1 };
    //         },
    //         loader: ({ params, abortSignal }) => this.fetchUser(params, abortSignal)
    //     });
    // }

    protected async fetchUser(params: any, abortSignal: AbortSignal): Promise<ITodoAdapter> {
        const result = await lastValueFrom(this.httpClient.get<ITodoAdapter>(`${this.apiUrl}/${this.id()}`));

        return new TodoAdapter(result);
    }
}
