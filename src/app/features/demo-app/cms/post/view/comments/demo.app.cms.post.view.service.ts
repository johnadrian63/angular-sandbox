import { inject, Injectable, signal, WritableSignal } from "@angular/core";
import { lastValueFrom } from "rxjs";

import { IPageOptions } from "../../../model/filter.model";
import { DemoAppCmsPostService } from "../../demo.app.cms.post.service";
import { DataCollatorService } from "../../../../../shared/data-collator";
import { DemoAppCmsPostViewPaginationService } from "./demo.app.cms.post.view.pagination.service";
import { IPostCommentAdapter, PostCommentAdapter } from "./demo.app.cms.post.view.comments.adapter";

@Injectable()
export class DemoAppCmsPostViewService extends DataCollatorService<IPostCommentAdapter> {
    public readonly postId: WritableSignal<number | undefined> = signal<number | undefined>(undefined);

    private readonly postService: DemoAppCmsPostService = inject<DemoAppCmsPostService>(DemoAppCmsPostService);
    private readonly paginationService: DemoAppCmsPostViewPaginationService = inject<DemoAppCmsPostViewPaginationService>(DemoAppCmsPostViewPaginationService);

    public override init(): void {
        // do nothing
    }

    public override async request(): Promise<IPostCommentAdapter[]> {
        try {
            const limit = this.paginationService.pageSize;
            const skip = limit * this.paginationService.page;
            const filter: IPageOptions = {
                skip,
                limit
            };

            const postId = this.postId()!;
            const request = this.postService.getComments(postId, filter);
            const result = await lastValueFrom(request);

            this.paginationService.setCount(result.total);

            const users: IPostCommentAdapter[] = [];

            for (let comment of result.comments) {
                users.push(new PostCommentAdapter(comment));
            }

            return users;
        } catch (error) {
            console.warn(error);
            return [];
        }
    }

    public override async loadRequest(): Promise<IPostCommentAdapter[]> {
        const result = await this.request();

        this.dataSource.update((dataSource) => [
            ...dataSource,
            ...result
        ]);

        return this.dataSource();
    }

    public override reset(): void {
        // cleanup logic
    }
}
