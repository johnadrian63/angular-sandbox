import { Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faEye, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import { PostAdapter } from "../demo.app.cms.post.model.adapter";
import { DataDisplayTextComponent } from "../../../../shared/data-display/text";
import { DataDisplayLinkComponent } from "../../../../shared/data-display/link";
import { DemoAppCmsPostViewComment } from "./comments/demo.app.cms.post.view.comment";
import { DemoAppCmsPostDisplayTags } from "../display/tags/demo.app.cms.post.display.tags";

@Component({
    selector: "app-demo-cms-app-post-view",
    templateUrl: "./demo.app.cms.post.view.html",
    imports: [
        DataDisplayTextComponent,
        DemoAppCmsPostDisplayTags,
        FaIconComponent,
        DataDisplayLinkComponent,
        DemoAppCmsPostViewComment
    ]
})
export class DemoAppCmsPostView {
    public readonly post = computed(() => {
        const data = this.data();

        return new PostAdapter(data["post"]);
    });

    public readonly viewIcon = faEye;
    public readonly likeIcon = faThumbsUp;
    public readonly dislikeIcon = faThumbsDown;

    private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly data = toSignal(this.activatedRoute.data, { requireSync: true });
}