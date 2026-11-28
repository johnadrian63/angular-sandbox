import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Observable } from "rxjs";

import { IUserCollection, IUser } from "./model/user/user.model";
import { IUserDefaultFilter, IUserFieldFilter, IUserSearchFilter } from "./model/user/user.filter.model";

@Service()
export class DummyJsonUserService {
    private readonly apiUrl = "https://dummyjson.com/users";

    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);

    public getList(filter: IUserDefaultFilter): Observable<IUserCollection> {
        return this.httpClient.get<IUserCollection>(this.apiUrl, {
            params: {
                ...filter
            }
        });
    }

    public searchUsers(filter: IUserSearchFilter): Observable<IUserCollection> {
        return this.httpClient.get<IUserCollection>(`${this.apiUrl}/search`, {
            params: {
                ...filter
            }
        });
    }

    public filterUsers(filter: IUserFieldFilter): Observable<IUserCollection> {
        return this.httpClient.get<IUserCollection>(`${this.apiUrl}/filter`, {
            params: {
                ...filter
            }
        });
    }

    public getUser(userId: string): Observable<IUser> {
        return this.httpClient.get<IUser>(`${this.apiUrl}/${userId}`);
    }

    public getUserPosts(userId: string): Observable<IUser> {
        return this.httpClient.get<IUser>(`${this.apiUrl}/${userId}`);
    }
}
