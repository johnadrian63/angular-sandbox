import { Params } from "@angular/router";
import { Observable } from "rxjs";

import { IPostCollection } from "../../demo.app.cms.post.model";
import { DemoAppCmsPostService } from "../../demo.app.cms.post.service";
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
    constructor(
        public readonly skip: number,
        public readonly limit: number
    ) { }

    public accept<T>(visitor: IDemoAppCmsPostListTableBuilderDataAdapter<T>): T {
        return visitor.visitGetPosts(this);
    }
}

export class DemoAppCmsPostListTableBuilderSearchPostsDataHandler implements IDemoAppCmsPostListTableBuilderDataHandler {
    constructor(
        public readonly searchText: string,
        public readonly skip: number,
        public readonly limit: number
    ) { }

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
        const searchText = params["search"];

        const skip = tableBuilderPaginationService.page;
        const limit = tableBuilderPaginationService.pageSize;

        if (searchText) {
            searchFormService.setValue(searchText);

            return new DemoAppCmsPostListTableBuilderSearchPostsDataHandler(searchText, skip, limit);
        }

        return new DemoAppCmsPostListTableBuilderGetPostsDataHandler(skip, limit);
    }
}

export class DemoAppCmsPostListTableBuilderDataAdapter implements IDemoAppCmsPostListTableBuilderDataAdapter<Observable<IPostCollection>> {
    constructor(private readonly postService: DemoAppCmsPostService) { }

    public visitGetPosts(handler: DemoAppCmsPostListTableBuilderGetPostsDataHandler): Observable<IPostCollection> {
        return this.postService.getPosts(handler.skip, handler.limit);
    }

    public visitSearchPosts(handler: DemoAppCmsPostListTableBuilderSearchPostsDataHandler): Observable<IPostCollection> {
        return this.postService.searchPosts(handler.searchText, handler.skip, handler.limit);

    }
}