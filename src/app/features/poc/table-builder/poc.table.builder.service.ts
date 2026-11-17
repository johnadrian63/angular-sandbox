import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

import { TableBuilderService } from "../../shared/table-builder";
import { IPost, IPostAdapter, PostAdapter } from "./poc.table.builder.model";

@Injectable()
export class PocTableBuilderService extends TableBuilderService {
    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);

    public override init(): void {
        // throw new Error("Method not implemented.");
    }

    public async getData(): Promise<IPostAdapter[]> {
        const apiUrl = "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=50";
        const result = await lastValueFrom(this.httpClient.get<IPost[]>(apiUrl))


        const posts: IPostAdapter[] = [];

        for (let post of result) {
            posts.push(new PostAdapter(post));
        }

        return posts;
    }

    public override reset(): void {
        // do cleanup here
    }
}