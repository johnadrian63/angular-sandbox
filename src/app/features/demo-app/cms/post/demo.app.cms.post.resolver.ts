import { ResolveFn, ActivatedRouteSnapshot } from "@angular/router";
import { inject } from "@angular/core";

import { IPost } from "./demo.app.cms.post.model";
import { DemoAppCmsPostService } from "./demo.app.cms.post.service";

export const postResolver: ResolveFn<IPost> = (route: ActivatedRouteSnapshot) => {
    const postService = inject(DemoAppCmsPostService);
    const userId = route.paramMap.get("id")!;

    return postService.getPost(+userId);
};