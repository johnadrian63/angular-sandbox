import { Component, effect, inject, input, resource, ResourceRef } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import { DemoAppCmsPostViewService } from "./demo.app.cms.post.view.service";
import { IPostCommentAdapter } from "./demo.app.cms.post.view.comments.adapter";
import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { DemoAppCmsPostViewPaginationService } from "./demo.app.cms.post.view.pagination.service";
import { DemoAppCmsPostViewCommentsSkeleton } from "./skeleton/demo.app.cms.post.view.comments.skeleton";

@Component({
    selector: "app-demo-cms-app-post-view-comments",
    templateUrl: "./demo.app.cms.post.view.comments.html",
    styleUrl: "./demo.app.cms.post.view.comments.css",
    imports: [
        DataDisplayTextComponent,
        FaIconComponent,
        DemoAppCmsPostViewCommentsSkeleton
    ],
    providers: [
        DemoAppCmsPostViewService,
        DemoAppCmsPostViewPaginationService
    ]
})
export class DemoAppCmsPostViewComments {

    public get hasNext(): boolean {
        return this.paginationService.hasNext;
    }

    public get totalComments(): number {
        return this.paginationService.count;
    }

    public readonly postId = input.required<number>();
    public readonly commentIcon = faComment;
    public readonly likeIcon = faThumbsUp;

    public readonly commentsResource: ResourceRef<IPostCommentAdapter[] | undefined> = resource({
        params: () => this.postViewService.postId(),
        loader: () => this.postViewService.loadRequest()
    });

    private readonly postViewService: DemoAppCmsPostViewService = inject<DemoAppCmsPostViewService>(DemoAppCmsPostViewService);
    private readonly paginationService: DemoAppCmsPostViewPaginationService = inject<DemoAppCmsPostViewPaginationService>(DemoAppCmsPostViewPaginationService);

    constructor() {
        effect(() => {
            this.postViewService.postId.set(this.postId());
        });
    }

    public loadMore(): void {
        if (this.commentsResource.isLoading()) {
            return;
        }

        if (this.paginationService.hasNext) {
            const page = this.paginationService.page + 1;
            const pageSize = this.paginationService.pageSize;

            this.paginationService.setPaging(page, pageSize);

            this.commentsResource.reload();
        }
    }
}


