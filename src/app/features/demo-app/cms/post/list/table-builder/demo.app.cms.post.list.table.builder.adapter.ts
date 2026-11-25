import { Params } from "@angular/router";
import { Observable } from "rxjs";

import { IPageOptions } from "../../../model/filter.model";
import { pickDefined } from "../../../../../shared/util/pick";
import { IPostCollection } from "../../demo.app.cms.post.model";
import { DemoAppCmsPostService } from "../../demo.app.cms.post.service";
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
        searchFormService: SearchFormService
    ): IDemoAppCmsPostListTableBuilderDataHandler {
        const limit = tableBuilderPaginationService.pageSize;
        const skip = limit * tableBuilderPaginationService.page;
        const paginationOptions: IPageOptions = {
            skip,
            limit
        };

        const searchFilter: IPostSearchFilter = pickDefined(params, ["q", "sortBy", "order", "skip", "limit"]);

        if (searchFilter.q) {
            searchFormService.setValue(searchFilter.q);

            const filter = { ...searchFilter, ...paginationOptions };

            searchFormService.setValue(searchFilter.q);

            return new DemoAppCmsPostListTableBuilderSearchPostsDataHandler(filter);
        }

        const defaultFilter: IPostDefaultFilter = pickDefined(params, ["sortBy", "order", "skip", "limit"]);
        const filter = { ...defaultFilter, ...paginationOptions };

        return new DemoAppCmsPostListTableBuilderGetPostsDataHandler(filter);
    }
}

export class DemoAppCmsPostListTableBuilderDataAdapter implements IDemoAppCmsPostListTableBuilderDataAdapter<Observable<IPostCollection>> {
    constructor(private readonly postService: DemoAppCmsPostService) { }

    public visitGetPosts(handler: DemoAppCmsPostListTableBuilderGetPostsDataHandler): Observable<IPostCollection> {
        return this.postService.getPosts(handler.filter);
    }

    public visitSearchPosts(handler: DemoAppCmsPostListTableBuilderSearchPostsDataHandler): Observable<IPostCollection> {
        return this.postService.searchPosts(handler.filter);
    }
}
