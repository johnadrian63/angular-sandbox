import { DestroyRef, inject, Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { lastValueFrom, skip } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { DemoAppCmsPostService } from "../../demo.app.cms.post.service";
import { IPostAdapter, PostAdapter } from "../../demo.app.cms.post.model";
import { TableBuilderService } from "../../../../../shared/table-builder";
import { DemoAppCmsPostListFilterSearchService } from "../filter/demo.app.cms.post.list.filter.search.service";
import { DemoAppCmsPostListTableBuilderPaginationService } from "./demo.app.cms.post.list.table.builder.pagination.service";
import { DemoAppCmsPostListTableBuilderDataAdapter, DemoAppCmsPostListTableBuilderGetPostsDataFactory } from "./demo.app.cms.post.list.table.builder.adapter";

@Injectable()
export class DemoAppCmsPostListTableBuilderService extends TableBuilderService {
    private readonly destroyRef: DestroyRef = inject<DestroyRef>(DestroyRef);
    private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly postService: DemoAppCmsPostService = inject<DemoAppCmsPostService>(DemoAppCmsPostService);
    private readonly tableBuilderPaginationService: DemoAppCmsPostListTableBuilderPaginationService = inject<DemoAppCmsPostListTableBuilderPaginationService>(DemoAppCmsPostListTableBuilderPaginationService);
    private readonly searchFormService: DemoAppCmsPostListFilterSearchService = inject<DemoAppCmsPostListFilterSearchService>(DemoAppCmsPostListFilterSearchService);

    public override init(): void {
        this.activatedRoute.queryParams
            .pipe(
                skip(1),
                takeUntilDestroyed(this.destroyRef)
            ).subscribe(async () => {
                this.refresh();
            });
    }

    public async getData(): Promise<IPostAdapter[]> {
        try {
            this.setLoading(true);

            const params = this.activatedRoute.snapshot.queryParams;
            const factory = DemoAppCmsPostListTableBuilderGetPostsDataFactory.create(params, this.tableBuilderPaginationService, this.searchFormService);
            const visitor = new DemoAppCmsPostListTableBuilderDataAdapter(this.postService);
            const result = await lastValueFrom(factory.accept(visitor));

            this.tableBuilderPaginationService.setCount(result.total);

            const posts: IPostAdapter[] = [];

            for (let post of result.posts) {
                posts.push(new PostAdapter(post));
            }

            return posts;
        } catch (error) {
            return [];
        } finally {
            this.setLoading(false);
        }
    }

    public override reset(): void {
        // do cleanup here
    }
}
