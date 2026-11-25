import { Params } from "@angular/router";
import { Observable } from "rxjs";

import { IPostCollection } from "../../model/post.model";
import { pickDefined } from "../../../../../shared/util/pick";
import { IPageOptions, ISort } from "../../../model/filter.model";
import { DemoAppCmsPostService } from "../../demo.app.cms.post.service";
import { TableBuilderSortBaseService } from "../../../../../shared/table-builder";
import { IPostDefaultFilter, IPostSearchFilter } from "../../model/post.filter.model";
import { SearchFormService } from "../../../../../shared/search-form/search.form.service";
import { TableBuilderPaginationRouteService } from "../../../../../shared/table-builder/service/table.builder.pagination.route.service";

export interface IDemoAppCmsPostListTableBuilderDataAdapter<T> {
    visitGetPosts(handler: DemoAppCmsPostListTableBuilderGetPostsDataHandler): T;
    visitSearchPosts(handler: DemoAppCmsPostListTableBuilderSearchPostsDataHandler): T;
}

export interface IDemoAppCmsPostListTableBuilderDataHandler {
    accept<T>(visitor: IDemoAppCmsPostListTableBuilderDataAdapter<T>): T;
}

export class DemoAppCmsPostListTableBuilderGetPostsDataHandler implements IDemoAppCmsPostListTableBuilderDataHandler {
    constructor(public readonly filter: IPostDefaultFilter) { }

    public accept<T>(visitor: IDemoAppCmsPostListTableBuilderDataAdapter<T>): T {
        return visitor.visitGetPosts(this);
    }
}

export class DemoAppCmsPostListTableBuilderSearchPostsDataHandler implements IDemoAppCmsPostListTableBuilderDataHandler {
    constructor(public readonly filter: IPostSearchFilter) { }

    public accept<T>(visitor: IDemoAppCmsPostListTableBuilderDataAdapter<T>): T {
        return visitor.visitSearchPosts(this);
    }
}

export class DemoAppCmsPostListTableBuilderGetPostsDataFactory {
    public static create(
        params: Params,
        tableBuilderPaginationService: TableBuilderPaginationRouteService,
        tableBuilderSortService: TableBuilderSortBaseService,
        searchFormService: SearchFormService
    ): IDemoAppCmsPostListTableBuilderDataHandler {
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

        const searchFilter: IPostSearchFilter = pickDefined(params, ["q"]);

        if (searchFilter.q) {
            searchFormService.setValue(searchFilter.q);

            const filter = { ...searchFilter, ...defaultFilter };

            searchFormService.setValue(searchFilter.q);

            return new DemoAppCmsPostListTableBuilderSearchPostsDataHandler(filter);
        }

        return new DemoAppCmsPostListTableBuilderGetPostsDataHandler(defaultFilter);
    }
}

export class DemoAppCmsPostListTableBuilderDataAdapter implements IDemoAppCmsPostListTableBuilderDataAdapter<Observable<IPostCollection>> {
    constructor(private readonly postService: DemoAppCmsPostService) { }

    public visitGetPosts(handler: DemoAppCmsPostListTableBuilderGetPostsDataHandler): Observable<IPostCollection> {
        return this.postService.getList(handler.filter);
    }

    public visitSearchPosts(handler: DemoAppCmsPostListTableBuilderSearchPostsDataHandler): Observable<IPostCollection> {
        return this.postService.searchPosts(handler.filter);
    }
}
