import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Observable } from "rxjs";


import { ITag } from "./model/tag.model";
import { IPageOptions } from "./model/filter.model";
import { IPostDefaultFilter, IPostSearchFilter } from "./model/post/post.filter.model";
import { IPostCollection, IPost, IPostCommentCollection } from "./model/post/post.model";

@Service()
export class DummyJsonPostService {
    private readonly apiUrl = "https://dummyjson.com/posts";
    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);

    public getList(filter: IPostDefaultFilter): Observable<IPostCollection> {
        return this.httpClient.get<IPostCollection>(this.apiUrl, {
            params: {
                ...filter
            }
        });
    }

    public searchPosts(filter: IPostSearchFilter): Observable<IPostCollection> {
        return this.httpClient.get<IPostCollection>(`${this.apiUrl}/search`, {
            params: {
                ...filter
            }
        });
    }

    public getPost(postId: number): Observable<IPost> {
        return this.httpClient.get<IPost>(`${this.apiUrl}/${postId}`);
    }

    public getUserPosts(userId: number, filter: IPostDefaultFilter): Observable<IPostCollection> {
        return this.httpClient.get<IPostCollection>(`${this.apiUrl}/user/${userId}`, {
            params: {
                ...filter
            }
        });
    }

    public getComments(postId: number, filter: IPageOptions): Observable<IPostCommentCollection> {
        return this.httpClient.get<IPostCommentCollection>(`${this.apiUrl}/${postId}/comments`, {
            params: {
                ...filter
            }
        });
    }

    public getPostTags(): Observable<ITag[]> {
        return this.httpClient.get<ITag[]>(`${this.apiUrl}/tags`);
    }
}
