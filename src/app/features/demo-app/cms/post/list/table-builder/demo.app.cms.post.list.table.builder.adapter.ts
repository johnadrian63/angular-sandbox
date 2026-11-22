import { Params } from "@angular/router";
import { Observable } from "rxjs";

import { DemoAppUserService } from "../../demo.app.post.service";
import { IPostCollection } from "../../demo.app.post.model";
import { SearchFormService } from "../../../../../shared/search-form/search.form.service";
import { TableBuilderPaginationRouteService } from "../../../../../shared/table-builder/service/table.builder.pagination.route.service";


export interface IDemoAppCmsPostListTableBuilderDataAdapter<T> {
    visitGetUsers(handler: DemoAppCmsPostListTableBuilderGetUsersDataHandler): T;
    visitSearchUsers(handler: DemoAppCmsPostListTableBuilderSearchUsersDataHandler): T;
    visitFilterUsers(handler: DemoAppCmsPostListTableBuilderFilterUsersDataHandler): T;
}

export interface IDemoAppCmsPostListTableBuilderDataHandler {
    accept<T>(visitor: IDemoAppCmsPostListTableBuilderDataAdapter<T>): T;
}

export class DemoAppCmsPostListTableBuilderGetUsersDataHandler implements IDemoAppCmsPostListTableBuilderDataHandler {
    constructor(
        public readonly skip: number,
        public readonly limit: number
    ) { }

    public accept<T>(visitor: IDemoAppCmsPostListTableBuilderDataAdapter<T>): T {
        return visitor.visitGetUsers(this);
    }
}

export class DemoAppCmsPostListTableBuilderSearchUsersDataHandler implements IDemoAppCmsPostListTableBuilderDataHandler {
    constructor(
        public readonly searchText: string,
        public readonly skip: number,
        public readonly limit: number
    ) { }

    public accept<T>(visitor: IDemoAppCmsPostListTableBuilderDataAdapter<T>): T {
        return visitor.visitSearchUsers(this);
    }
}

export class DemoAppCmsPostListTableBuilderFilterUsersDataHandler implements IDemoAppCmsPostListTableBuilderDataHandler {
    constructor(
        public readonly key: string,
        public readonly value: string
    ) { }

    public accept<T>(visitor: IDemoAppCmsPostListTableBuilderDataAdapter<T>): T {
        return visitor.visitFilterUsers(this);
    }
}

export class DemoAppCmsPostListTableBuilderGetUsersDataFactory {
    public static create(
        params: Params,
        tableBuilderPaginationService: TableBuilderPaginationRouteService,
        searchFormService: SearchFormService
    ): IDemoAppCmsPostListTableBuilderDataHandler {
        const searchText = params["search"];

        const skip = tableBuilderPaginationService.page;
        const limit = tableBuilderPaginationService.pageSize;

        if (searchText) {
            searchFormService.setValue(searchText);

            return new DemoAppCmsPostListTableBuilderSearchUsersDataHandler(searchText, skip, limit);
        }

        const key = params["key"];
        const value = params["value"];

        if (key && value) {
            return new DemoAppCmsPostListTableBuilderFilterUsersDataHandler(key, value);
        }

        return new DemoAppCmsPostListTableBuilderGetUsersDataHandler(skip, limit);
    }
}

export class DemoAppCmsPostListTableBuilderDataAdapter implements IDemoAppCmsPostListTableBuilderDataAdapter<Observable<IPostCollection>> {
    constructor(private readonly demoAppUserService: DemoAppUserService) { }

    public visitGetUsers(handler: DemoAppCmsPostListTableBuilderGetUsersDataHandler): Observable<IPostCollection> {
        return this.demoAppUserService.getUsers(handler.skip, handler.limit);
    }

    public visitSearchUsers(handler: DemoAppCmsPostListTableBuilderSearchUsersDataHandler): Observable<IPostCollection> {
        return this.demoAppUserService.searchUsers(handler.searchText, handler.skip, handler.limit);
    }

    public visitFilterUsers(handler: DemoAppCmsPostListTableBuilderFilterUsersDataHandler): Observable<IPostCollection> {
        return this.demoAppUserService.filterUsers(handler.key, handler.value);
    }
}


