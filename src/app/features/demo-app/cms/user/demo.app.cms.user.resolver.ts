import { ResolveFn, ActivatedRouteSnapshot } from "@angular/router";
import { inject } from "@angular/core";

import { IUser } from "./model/user.model";
import { DemoAppCmsUserService } from "./demo.app.cms.user.service";

export const userResolver: ResolveFn<IUser> = (route: ActivatedRouteSnapshot) => {
    const userService = inject(DemoAppCmsUserService);
    const userId = route.paramMap.get("id")!;

    return userService.getUser(userId);
};