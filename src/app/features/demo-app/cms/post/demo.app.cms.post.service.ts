import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Observable } from "rxjs";

import { IPost, IPostCollection } from "./demo.app.cms.post.model";

@Service()
export class DemoAppCmsPostService {
    private readonly apiUrl = "https://dummyjson.com/posts";

    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);

    public getPosts(skip: number, limit: number): Observable<IPostCollection> {
        return this.httpClient.get<IPostCollection>(this.apiUrl, {
            params: {
                skip: limit * skip,
                limit: limit
            }
        });
    }

    public searchPosts(searchText: string, skip: number, limit: number): Observable<IPostCollection> {
        return this.httpClient.get<IPostCollection>(`${this.apiUrl}/search`, {
            params: {
                q: searchText,
                skip: limit * skip,
                limit: limit
            }
        });
    }

    public getPost(postId: string): Observable<IPost> {
        return this.httpClient.get<IPost>(`${this.apiUrl}/${postId}`);
    }
}
