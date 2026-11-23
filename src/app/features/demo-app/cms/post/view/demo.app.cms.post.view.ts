import { Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faEye, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import { PostAdapter } from "../../post/demo.app.cms.post.model";
import { DataDisplayTextComponent } from "../../../../shared/data-display/text";
import { NavigationService } from "../../../../shared/util/navigation.service";
import { DemoAppCmsPostDisplayTags } from "../display/tags/demo.app.cms.post.display.tags";

@Component({
    selector: "app-demo-cms-app-post-view",
    templateUrl: "./demo.app.cms.post.view.html",
    imports: [
        DataDisplayTextComponent,
        DemoAppCmsPostDisplayTags,
        FaIconComponent
    ]
})
export class DemoAppCmsPointView {
    public readonly post = computed(() => {
        const data = this.data();

        return new PostAdapter(data["post"]);
    });

    public readonly viewIcon = faEye;
    public readonly likeIcon = faThumbsUp;
    public readonly dislikeIcon = faThumbsDown;

    private readonly route: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly data = toSignal(this.route.data, { requireSync: true });
    private readonly location: NavigationService = inject<NavigationService>(NavigationService);

    public back(): void {
        this.location.back();
    }
}