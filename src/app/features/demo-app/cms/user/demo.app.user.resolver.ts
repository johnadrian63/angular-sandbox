import { ResolveFn, ActivatedRouteSnapshot } from "@angular/router";
import { inject } from "@angular/core";

import { IUser } from "./demo.app.user.model";
import { DemoAppUserService } from "./demo.app.user.service";

export const userResolver: ResolveFn<IUser> = (route: ActivatedRouteSnapshot) => {
    const userService = inject(DemoAppUserService);
    const userId = route.paramMap.get("id")!;

    return userService.getUser(userId);
};