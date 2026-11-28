import { ResolveFn, ActivatedRouteSnapshot } from "@angular/router";
import { inject } from "@angular/core";

import { IUser } from "../../../shared/external-api/dummyjson/model/user/user.model";
import { DummyJsonUserService } from "../../../shared/external-api/dummyjson/dummyjson.user.service";

export const userResolver: ResolveFn<IUser> = (route: ActivatedRouteSnapshot) => {
    const userService = inject(DummyJsonUserService);
    const userId = route.paramMap.get("id")!;

    return userService.getUser(userId);
};
