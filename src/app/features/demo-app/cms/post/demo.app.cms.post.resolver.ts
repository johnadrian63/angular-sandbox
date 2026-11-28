import { ResolveFn, ActivatedRouteSnapshot } from "@angular/router";
import { inject } from "@angular/core";

import { IPost } from "../../../shared/external-api/dummyjson/model/post/post.model";
import { DummyJsonPostService } from "../../../shared/external-api/dummyjson/dummyjson.post.service";

export const postResolver: ResolveFn<IPost> = (route: ActivatedRouteSnapshot) => {
    const postService = inject(DummyJsonPostService);
    const userId = route.paramMap.get("id")!;

    return postService.getPost(+userId);
};
