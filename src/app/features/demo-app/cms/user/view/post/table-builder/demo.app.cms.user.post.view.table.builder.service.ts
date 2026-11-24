import { DestroyRef, inject, Injectable, signal, WritableSignal } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { TableBuilderService } from "../../../../../../shared/table-builder";
import { IPostDefaultFilter } from "../../../../post/model/post.filter.model";
import { DemoAppCmsPostService } from "../../../../post/demo.app.cms.post.service";
import { IPostAdapter, PostAdapter } from "../../../../post/demo.app.cms.post.model.adapter";
import { DemoAppCmsUserViewPostTableBuilderSortService } from "./demo.app.cms.user.post.view.table.builder.sort.service";
import { DemoAppCmsUserViewPostTableBuilderPaginationService } from "./demo.app.cms.user.post.view.table.builder.pagination.service";
import { TABLE_BUILDER_REFRESH_TOKEN, TableBuilderRefresher } from "../../../../../../shared/table-builder/table.builder.token";

@Injectable()
export class DemoAppCmsUserViewPostTableBuilderService extends TableBuilderService {
    public readonly userId: WritableSignal<number | undefined> = signal<number | undefined>(undefined);

    private readonly destroyRef: DestroyRef = inject<DestroyRef>(DestroyRef);
    private readonly postService: DemoAppCmsPostService = inject<DemoAppCmsPostService>(DemoAppCmsPostService);
    private readonly tableBuilderSortService: DemoAppCmsUserViewPostTableBuilderSortService = inject<DemoAppCmsUserViewPostTableBuilderSortService>(DemoAppCmsUserViewPostTableBuilderSortService);
    private readonly tableBuilderPaginationService: DemoAppCmsUserViewPostTableBuilderPaginationService = inject<DemoAppCmsUserViewPostTableBuilderPaginationService>(DemoAppCmsUserViewPostTableBuilderPaginationService);
    private readonly refresher = inject<TableBuilderRefresher>(TABLE_BUILDER_REFRESH_TOKEN);

    public override init(): void {
        this.tableBuilderSortService.sortChanged$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.refresher.refresh();
            });
    }

    public override async getData(): Promise<IPostAdapter[]> {
        try {
            const userId = this.userId();

            if (!userId) {
                throw new Error("userId is required.");
            }

            this.setLoading(true);

            const filter: IPostDefaultFilter = {
                skip: this.tableBuilderPaginationService.page,
                limit: this.tableBuilderPaginationService.pageSize,
            };

            const sortBy = this.tableBuilderSortService.sort.columnKey;
            const order = this.tableBuilderSortService.sort.direction;

            if (sortBy && order) {
                filter.sortBy = sortBy;
                filter.order = order;
            }

            const request = this.postService.getUserPosts(userId, filter);
            const result = await lastValueFrom(request);
            this.tableBuilderPaginationService.setCount(result.total);

            const posts: IPostAdapter[] = [];

            for (let post of result.posts) {
                posts.push(new PostAdapter(post));
            }

            return posts;
        } catch (error) {
            console.warn("error", error);

            return [];
        } finally {

            this.setLoading(false);
        }
    }

    public override reset(): void {
        // cleanup logic here
    }
}