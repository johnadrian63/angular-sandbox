import { ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";

import { DemoAppUserService } from "../../demo.app.user.service";
import { IUserCollection } from "../../demo.app.user.model";
import { TableBuilderPaginationRouteService } from "../../../../../shared/table-builder/service/table.builder.pagination.route.service";


export interface IDemoAppCmsUserListTableBuilderDataAdapter<T> {
    visitGetUsers(handler: DemoAppCmsUserListTableBuilderGetUsersDataHandler): T;
    visitSearchUsers(handler: DemoAppCmsUserListTableBuilderSearchUsersDataHandler): T;
    visitFilterUsers(handler: DemoAppCmsUserListTableBuilderFilterUsersDataHandler): T;
}

export interface IDemoAppCmsUserListTableBuilderDataHandler {
    accept<T>(visitor: IDemoAppCmsUserListTableBuilderDataAdapter<T>): T;
}

export class DemoAppCmsUserListTableBuilderGetUsersDataHandler implements IDemoAppCmsUserListTableBuilderDataHandler {
    constructor(
        public readonly skip: number,
        public readonly limit: number
    ) { }

    public accept<T>(visitor: IDemoAppCmsUserListTableBuilderDataAdapter<T>): T {
        return visitor.visitGetUsers(this);
    }
}

export class DemoAppCmsUserListTableBuilderSearchUsersDataHandler implements IDemoAppCmsUserListTableBuilderDataHandler {
    constructor(
        public readonly searchText: string,
        public readonly skip: number,
        public readonly limit: number
    ) { }

    public accept<T>(visitor: IDemoAppCmsUserListTableBuilderDataAdapter<T>): T {
        return visitor.visitSearchUsers(this);
    }
}

export class DemoAppCmsUserListTableBuilderFilterUsersDataHandler implements IDemoAppCmsUserListTableBuilderDataHandler {
    constructor(
        public readonly key: string,
        public readonly value: string
    ) { }

    public accept<T>(visitor: IDemoAppCmsUserListTableBuilderDataAdapter<T>): T {
        return visitor.visitFilterUsers(this);
    }
}

export class DemoAppCmsUserListTableBuilderGetUsersDataFactory {
    public static create(
        params: Params,
        tableBuilderPaginationService: TableBuilderPaginationRouteService
    ): IDemoAppCmsUserListTableBuilderDataHandler {
        const searchText = params["search"];

        const skip = tableBuilderPaginationService.page;
        const limit = tableBuilderPaginationService.pageSize;

        if (searchText) {
            return new DemoAppCmsUserListTableBuilderSearchUsersDataHandler(searchText, skip, limit);
        }

        const key = params["key"];
        const value = params["value"];

        if (key && value) {
            return new DemoAppCmsUserListTableBuilderFilterUsersDataHandler(key, value);
        }

        return new DemoAppCmsUserListTableBuilderGetUsersDataHandler(skip, limit);
    }
}

export class DemoAppCmsUserListTableBuilderDataAdapter implements IDemoAppCmsUserListTableBuilderDataAdapter<Observable<IUserCollection>> {
    constructor(private readonly demoAppUserService: DemoAppUserService) { }

    public visitGetUsers(handler: DemoAppCmsUserListTableBuilderGetUsersDataHandler): Observable<IUserCollection> {
        return this.demoAppUserService.getUsers(handler.skip, handler.limit);
    }

    public visitSearchUsers(handler: DemoAppCmsUserListTableBuilderSearchUsersDataHandler): Observable<IUserCollection> {
        return this.demoAppUserService.searchUsers(handler.searchText, handler.skip, handler.limit);
    }

    public visitFilterUsers(handler: DemoAppCmsUserListTableBuilderFilterUsersDataHandler): Observable<IUserCollection> {
        return this.demoAppUserService.filterUsers(handler.key, handler.value);
    }
}


