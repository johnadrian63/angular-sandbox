import { Params } from "@angular/router";
import { Observable } from "rxjs";

import { IUserCollection } from "../../demo.app.user.model";
import { pickDefined } from "../../../../../shared/util/pick";
import { DemoAppUserService } from "../../demo.app.user.service";
import { SearchFormService } from "../../../../../shared/search-form/search.form.service";
import { IPaging, IUserDefaultFilter, IUserFieldFilter, IUserSearchFilter } from "../../demo.app.user.filter.model";
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
        const skip = tableBuilderPaginationService.page;
        const limit = tableBuilderPaginationService.pageSize;

        const pagingOption: IPaging = {
            skip,
            limit
        };

        const searchFilter: IUserSearchFilter = pickDefined(params, ["q", "sortBy", "order", "skip", "limit"]);

        if (searchFilter.q) {
            searchFormService.setValue(searchFilter.q);

            const filter = { ...searchFilter, ...pagingOption };

            return new DemoAppCmsUserListTableBuilderSearchUsersDataHandler(filter);
        }

        const fieldFilter: IUserFieldFilter = pickDefined(params, ["key", "value", "sortBy", "order", "skip", "limit"]);

        if (fieldFilter.key && fieldFilter.value) {
            const filter = { ...fieldFilter, ...pagingOption };

            return new DemoAppCmsUserListTableBuilderFilterUsersDataHandler(filter);
        }

        const defaultFilter: IUserDefaultFilter = pickDefined(params, ["sortBy", "order", "skip", "limit"]);
        const filter = { ...defaultFilter, ...pagingOption };

        return new DemoAppCmsUserListTableBuilderGetUsersDataHandler(filter);
    }
}

export class DemoAppCmsUserListTableBuilderDataAdapter implements IDemoAppCmsUserListTableBuilderDataAdapter<Observable<IUserCollection>> {
    constructor(private readonly demoAppUserService: DemoAppUserService) { }

    public visitGetUsers(handler: DemoAppCmsUserListTableBuilderGetUsersDataHandler): Observable<IUserCollection> {
        return this.demoAppUserService.getUsers(handler.filter);
    }

    public visitSearchUsers(handler: DemoAppCmsUserListTableBuilderSearchUsersDataHandler): Observable<IUserCollection> {
        return this.demoAppUserService.searchUsers(handler.filter);
    }

    public visitFilterUsers(handler: DemoAppCmsUserListTableBuilderFilterUsersDataHandler): Observable<IUserCollection> {
        return this.demoAppUserService.filterUsers(handler.filter);
    }
}


