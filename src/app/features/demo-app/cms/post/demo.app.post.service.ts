import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Observable } from "rxjs";

import { IPostCollection } from "./demo.app.post.model";

@Service()
export class DemoAppUserService {
    private readonly apiUrl = "https://dummyjson.com/posts";

    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);

    public getUsers(skip: number, limit: number): Observable<IPostCollection> {
        return this.httpClient.get<IPostCollection>(this.apiUrl, {
            params: {
                skip: limit * skip,
                limit: limit
            }
        });
    }

    public searchUsers(searchText: string, skip: number, limit: number): Observable<IPostCollection> {
        return this.httpClient.get<IPostCollection>(`${this.apiUrl}/search`, {
            params: {
                q: searchText,
                skip: limit * skip,
                limit: limit
            }
        });
    }

    public filterUsers(key: string, value: string): Observable<IPostCollection> {
        return this.httpClient.get<IPostCollection>(`${this.apiUrl}/filter`, {
            params: {
                key,
                value
            }
        });
    }
}
