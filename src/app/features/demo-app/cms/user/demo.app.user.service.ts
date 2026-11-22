import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Observable } from "rxjs";

import { IUser, IUserCollection } from "./demo.app.user.model";

@Service()
export class DemoAppUserService {
    private readonly apiUrl = "https://dummyjson.com/users";

    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);

    public getUsers(skip: number, limit: number): Observable<IUserCollection> {
        return this.httpClient.get<IUserCollection>(this.apiUrl, {
            params: {
                skip: limit * skip,
                limit: limit
            }
        });
    }

    public searchUsers(searchText: string, skip: number, limit: number): Observable<IUserCollection> {
        return this.httpClient.get<IUserCollection>(`${this.apiUrl}/search`, {
            params: {
                q: searchText,
                skip: limit * skip,
                limit: limit
            }
        });
    }

    public filterUsers(key: string, value: string): Observable<IUserCollection> {
        return this.httpClient.get<IUserCollection>(`${this.apiUrl}/filter`, {
            params: {
                key,
                value
            }
        });
    }

    public getUser(userId: string): Observable<IUser> {
        return this.httpClient.get<IUser>(`${this.apiUrl}/${userId}`);
    }
}
