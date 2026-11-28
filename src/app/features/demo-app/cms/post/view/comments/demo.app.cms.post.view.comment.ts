import { Component, inject, input } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import { IPostCommentAdapter } from "./demo.app.cms.post.view.comment.adapter";
import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { DemoAppCmsPostViewCommentService } from "./demo.app.cms.post.view.comment.service";
import { DemoAppCmsPostViewCommentSkeleton } from "./skeleton/demo.app.cms.post.view.comment.skeleton";
import { DemoAppCmsPostViewPaginationService } from "./demo.app.cms.post.view.comment.pagination.service";

@Component({
    selector: "app-demo-cms-app-post-view-comment",
    templateUrl: "./demo.app.cms.post.view.comment.html",
    styleUrl: "./demo.app.cms.post.view.comment.css",
    imports: [
        FaIconComponent,
        DataDisplayTextComponent,
        DemoAppCmsPostViewCommentSkeleton
    ],
    providers: [
        DemoAppCmsPostViewCommentService,
        DemoAppCmsPostViewPaginationService
    ]
})
export class DemoAppCmsPostViewComment {

    public get comments(): IPostCommentAdapter[] | undefined {
        return this.viewCommentService.dataSource;
    }

    public get totalComments(): number {
        return this.paginationService.count;
    }

    public get hasNext(): boolean {
        return this.paginationService.hasNext;
    }

    public get isLoading(): boolean {
        return this.viewCommentService.isLoading();
    }

    public readonly postId = input.required<number>();
    public readonly commentIcon = faComment;
    public readonly likeIcon = faThumbsUp;

    private readonly viewCommentService: DemoAppCmsPostViewCommentService = inject<DemoAppCmsPostViewCommentService>(DemoAppCmsPostViewCommentService);
    private readonly paginationService: DemoAppCmsPostViewPaginationService = inject<DemoAppCmsPostViewPaginationService>(DemoAppCmsPostViewPaginationService);

    constructor() {
        this.viewCommentService.registerSignalDeps({
            postId: this.postId
        });
    }

    public loadMore(): void {
        if (this.viewCommentService.isLoading()) {
            return;
        }

        if (this.paginationService.hasNext) {
            const page = this.paginationService.page + 1;
            const pageSize = this.paginationService.pageSize;

            this.paginationService.setPaging(page, pageSize);
        }
    }
}


