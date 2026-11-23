import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Observable } from "rxjs";

import { IUser, IUserCollection } from "./demo.app.user.model";
import { IUserDefaultFilter, IUserFieldFilter, IUserSearchFilter } from "./demo.app.user.filter.model";

@Service()
export class DemoAppUserService {
    private readonly apiUrl = "https://dummyjson.com/users";

    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);

    public getUsers(filter: IUserDefaultFilter): Observable<IUserCollection> {
        return this.httpClient.get<IUserCollection>(this.apiUrl, {
            params: {
                ...filter,
                skip: filter.limit * filter.skip,
                limit: filter.limit
            }
        });
    }

    public searchUsers(filter: IUserSearchFilter): Observable<IUserCollection> {
        return this.httpClient.get<IUserCollection>(`${this.apiUrl}/search`, {
            params: {
                ...filter,
                skip: filter.limit * filter.skip,
                limit: filter.limit
            }
        });
    }

    public filterUsers(filter: IUserFieldFilter): Observable<IUserCollection> {
        return this.httpClient.get<IUserCollection>(`${this.apiUrl}/filter`, {
            params: {
                ...filter,
                skip: filter.limit * filter.skip,
                limit: filter.limit
            }
        });
    }

    public getUser(userId: string): Observable<IUser> {
        return this.httpClient.get<IUser>(`${this.apiUrl}/${userId}`);
    }
}
