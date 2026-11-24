import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Observable } from "rxjs";

import { IPost, IPostCollection } from "./demo.app.cms.post.model";
import { IPostDefaultFilter, IPostSearchFilter } from "./demo.app.cms.post.filter.model";

@Service()
export class DemoAppCmsPostService {
    private readonly apiUrl = "https://dummyjson.com/posts";

    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);

    public getPosts(filter: IPostDefaultFilter): Observable<IPostCollection> {
        return this.httpClient.get<IPostCollection>(this.apiUrl, {
            params: {
                ...filter,
                skip: filter.limit * filter.skip,
                limit: filter.limit
            }
        });
    }

    public searchPosts(filter: IPostSearchFilter): Observable<IPostCollection> {
        return this.httpClient.get<IPostCollection>(`${this.apiUrl}/search`, {
            params: {
                ...filter,
                skip: filter.limit * filter.skip,
                limit: filter.limit
            }
        });
    }

    public getPost(postId: string): Observable<IPost> {
        return this.httpClient.get<IPost>(`${this.apiUrl}/${postId}`);
    }
}
