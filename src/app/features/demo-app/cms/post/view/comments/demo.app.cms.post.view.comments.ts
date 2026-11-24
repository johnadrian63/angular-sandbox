import { Component, effect, inject, input, resource, ResourceRef } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import { DemoAppCmsPostViewService } from "./demo.app.cms.post.view.service";
import { IPostCommentAdapter } from "./demo.app.cms.post.view.comments.adapter";
import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { DemoAppCmsPostViewCommentsSkeleton } from "./skeleton/demo.app.cms.post.view.comments.skeleton";

@Component({
    selector: "app-demo-cms-app-post-view-comments",
    templateUrl: "./demo.app.cms.post.view.comments.html",
    imports: [
        DataDisplayTextComponent,
        FaIconComponent,
        DemoAppCmsPostViewCommentsSkeleton
    ]
})
export class DemoAppCmsPostViewComments {

    public get totalComments(): number {
        return this.comments.value()?.length ?? 0;
    }

    public readonly postId = input.required<number>();
    public readonly commentIcon = faComment;
    public readonly likeIcon = faThumbsUp;

    public readonly comments: ResourceRef<IPostCommentAdapter[] | undefined> = resource({
        params: () => this.postViewService.postId(),
        loader: () => this.postViewService.getData()
    });

    private readonly postViewService: DemoAppCmsPostViewService = inject<DemoAppCmsPostViewService>(DemoAppCmsPostViewService);

    constructor() {
        effect(() => {
            this.postViewService.postId.set(this.postId());
        });
    }
}