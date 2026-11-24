import { Params } from "@angular/router";
import { Observable } from "rxjs";

import { pickDefined } from "../../../../../shared/util/pick";
import { IUserCollection } from "../../model/user.model";
import { IPageOptions } from "../../../model/filter.model";
import { DemoAppCmsUserService } from "../../demo.app.cms.user.service";
import { SearchFormService } from "../../../../../shared/search-form/search.form.service";
import { IUserDefaultFilter, IUserFieldFilter, IUserSearchFilter } from "../../model/user.filter.model";
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
        searchFormService: SearchFormService
    ): IDemoAppCmsUserListTableBuilderDataHandler {
        const paginationOptions: IPageOptions = {
            skip: tableBuilderPaginationService.page,
            limit: tableBuilderPaginationService.pageSize
        };

        const searchFilter: IUserSearchFilter = pickDefined(params, ["q", "sortBy", "order", "skip", "limit"]);

        if (searchFilter.q) {
            searchFormService.setValue(searchFilter.q);

            const filter = { ...searchFilter, ...paginationOptions };

            return new DemoAppCmsUserListTableBuilderSearchUsersDataHandler(filter);
        }

        const fieldFilter: IUserFieldFilter = pickDefined(params, ["key", "value", "sortBy", "order", "skip", "limit"]);

        if (fieldFilter.key && fieldFilter.value) {
            const filter = { ...fieldFilter, ...paginationOptions };

            return new DemoAppCmsUserListTableBuilderFilterUsersDataHandler(filter);
        }

        const defaultFilter: IUserDefaultFilter = pickDefined(params, ["sortBy", "order", "skip", "limit"]);
        const filter = { ...defaultFilter, ...paginationOptions };

        return new DemoAppCmsUserListTableBuilderGetUsersDataHandler(filter);
    }
}

export class DemoAppCmsUserListTableBuilderDataAdapter implements IDemoAppCmsUserListTableBuilderDataAdapter<Observable<IUserCollection>> {
    constructor(private readonly userService: DemoAppCmsUserService) { }

    public visitGetUsers(handler: DemoAppCmsUserListTableBuilderGetUsersDataHandler): Observable<IUserCollection> {
        return this.userService.getUsers(handler.filter);
    }

    public visitSearchUsers(handler: DemoAppCmsUserListTableBuilderSearchUsersDataHandler): Observable<IUserCollection> {
        return this.userService.searchUsers(handler.filter);
    }

    public visitFilterUsers(handler: DemoAppCmsUserListTableBuilderFilterUsersDataHandler): Observable<IUserCollection> {
        return this.userService.filterUsers(handler.filter);
    }
}


