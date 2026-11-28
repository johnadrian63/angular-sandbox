import { Params } from "@angular/router";
import { Observable } from "rxjs";

import { pickDefined } from "../../../../../shared/util/pick";
import { SearchFormService } from "../../../../../shared/search-form/search.form.service";
import { IUserCollection } from "../../../../../shared/external-api/dummyjson/model/user/user.model";
import { IPageOptions, ISort } from "../../../../../shared/external-api/dummyjson/model/filter.model";
import { DummyJsonUserService } from "../../../../../shared/external-api/dummyjson/dummyjson.user.service";
import { TableBuilderSortRouteService } from "../../../../../shared/table-builder/service/table.builder.sort.route.service";
import { TableBuilderPaginationRouteService } from "../../../../../shared/table-builder/service/table.builder.pagination.route.service";
import { IUserDefaultFilter, IUserFieldFilter, IUserSearchFilter } from "../../../../../shared/external-api/dummyjson/model/user/user.filter.model";

export interface IDemoAppCmsUserListTableBuilderDataAdapter<T> {
    visitGetUsers(handler: DemoAppCmsUserListTableBuilderGetUsersDataHandler): T;
    visitSearchUsers(handler: DemoAppCmsUserListTableBuilderSearchUsersDataHandler): T;
    visitFilterUsers(handler: DemoAppCmsUserListTableBuilderFilterUsersDataHandler): T;
}

export interface IDemoAppCmsUserListTableBuilderDataHandler {
    accept<T>(visitor: IDemoAppCmsUserListTableBuilderDataAdapter<T>): T;
}

export class DemoAppCmsUserListTableBuilderGetUsersDataHandler implements IDemoAppCmsUserListTableBuilderDataHandler {
    constructor(public readonly filter: IUserDefaultFilter) { }

    public accept<T>(visitor: IDemoAppCmsUserListTableBuilderDataAdapter<T>): T {
        return visitor.visitGetUsers(this);
    }
}

export class DemoAppCmsUserListTableBuilderSearchUsersDataHandler implements IDemoAppCmsUserListTableBuilderDataHandler {
    constructor(public readonly filter: IUserSearchFilter) { }

    public accept<T>(visitor: IDemoAppCmsUserListTableBuilderDataAdapter<T>): T {
        return visitor.visitSearchUsers(this);
    }
}

export class DemoAppCmsUserListTableBuilderFilterUsersDataHandler implements IDemoAppCmsUserListTableBuilderDataHandler {
    constructor(public readonly filter: IUserFieldFilter) { }

    public accept<T>(visitor: IDemoAppCmsUserListTableBuilderDataAdapter<T>): T {
        return visitor.visitFilterUsers(this);
    }
}

export class DemoAppCmsUserListTableBuilderGetUsersDataFactory {
    public static create(
        params: Params,
        tableBuilderPaginationService: TableBuilderPaginationRouteService,
        tableBuilderSortService: TableBuilderSortRouteService,
        searchFormService: SearchFormService
    ): IDemoAppCmsUserListTableBuilderDataHandler {
        const limit = tableBuilderPaginationService.pageSize;
        const skip = limit * tableBuilderPaginationService.page;
        const defaultFilter: IPageOptions & ISort = {
            skip,
            limit
        };

        const sortBy = tableBuilderSortService.sort.column!;
        const order = tableBuilderSortService.sort.direction!;

        if (sortBy && order) {
            defaultFilter.sortBy = sortBy;
            defaultFilter.order = order;
        }

        const searchFilter: IUserSearchFilter = pickDefined(params, ["q"]);

        if (searchFilter.q) {
            searchFormService.setValue(searchFilter.q);

            const filter = {
                ...searchFilter,
                ...defaultFilter
            };

            return new DemoAppCmsUserListTableBuilderSearchUsersDataHandler(filter);
        }

        const fieldFilter: IUserFieldFilter = pickDefined(params, ["key", "value"]);

        if (fieldFilter.key && fieldFilter.value) {
            const filter = {
                ...fieldFilter,
                ...defaultFilter
            };

            return new DemoAppCmsUserListTableBuilderFilterUsersDataHandler(filter);
        }

        return new DemoAppCmsUserListTableBuilderGetUsersDataHandler(defaultFilter);
    }
}

export class DemoAppCmsUserListTableBuilderDataAdapter implements IDemoAppCmsUserListTableBuilderDataAdapter<Observable<IUserCollection>> {
    constructor(private readonly userService: DummyJsonUserService) { }

    public visitGetUsers(handler: DemoAppCmsUserListTableBuilderGetUsersDataHandler): Observable<IUserCollection> {
        return this.userService.getList(handler.filter);
    }

    public visitSearchUsers(handler: DemoAppCmsUserListTableBuilderSearchUsersDataHandler): Observable<IUserCollection> {
        return this.userService.searchUsers(handler.filter);
    }

    public visitFilterUsers(handler: DemoAppCmsUserListTableBuilderFilterUsersDataHandler): Observable<IUserCollection> {
        return this.userService.filterUsers(handler.filter);
    }
}


