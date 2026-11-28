import { Params } from "@angular/router";
import { Observable } from "rxjs";

import { pickDefined } from "../../../../../shared/util/pick";
import { TableBuilderSortBaseService } from "../../../../../shared/table-builder";
import { SearchFormService } from "../../../../../shared/search-form/search.form.service";
import { IPostCollection } from "../../../../../shared/external-api/dummyjson/model/post/post.model";
import { IPageOptions, ISort } from "../../../../../shared/external-api/dummyjson/model/filter.model";
import { DummyJsonPostService } from "../../../../../shared/external-api/dummyjson/dummyjson.post.service";
import { IPostDefaultFilter, IPostSearchFilter } from "../../../../../shared/external-api/dummyjson/model/post/post.filter.model";
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
    constructor(private readonly postService: DummyJsonPostService) { }

    public visitGetPosts(handler: DemoAppCmsPostListTableBuilderGetPostsDataHandler): Observable<IPostCollection> {
        return this.postService.getList(handler.filter);
    }

    public visitSearchPosts(handler: DemoAppCmsPostListTableBuilderSearchPostsDataHandler): Observable<IPostCollection> {
        return this.postService.searchPosts(handler.filter);
    }
}
