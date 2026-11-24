import { inject, Service, signal, WritableSignal } from "@angular/core";
import { lastValueFrom } from "rxjs";

import { DemoAppCmsPostService } from "../../demo.app.cms.post.service";
import { DataCollatorService } from "../../../../../shared/data-collator";
import { DemoAppCmsPostViewPaginationService } from "./demo.app.cms.post.view.pagination.service";
import { IPostCommentAdapter, PostCommentAdapter } from "./demo.app.cms.post.view.comments.adapter";

@Service()
export class DemoAppCmsPostViewService extends DataCollatorService {
    public readonly postId: WritableSignal<number | undefined> = signal<number | undefined>(undefined);

    private readonly postService: DemoAppCmsPostService = inject<DemoAppCmsPostService>(DemoAppCmsPostService);
    private readonly paginationService: DemoAppCmsPostViewPaginationService = inject<DemoAppCmsPostViewPaginationService>(DemoAppCmsPostViewPaginationService);

    public override init(): void {
        // implement init logic
    }

    public override async getData(): Promise<IPostCommentAdapter[]> {
        try {
            this.setLoading(true);

            const request = this.postService.getComments(this.postId()!);
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
        } finally {
            this.setLoading(false);
        }
    }

    public override reset(): void {
        // cleanup logic
    }
}