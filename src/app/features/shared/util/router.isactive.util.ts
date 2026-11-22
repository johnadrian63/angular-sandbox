import { isActive, Router } from "@angular/router";

export function isRouteActive(router: Router, path: string | string[]) {
    const processedPath = path && Array.isArray(path) ? router.createUrlTree(path) : path;

    if (!processedPath) {
        return false;
    }

    const active = isActive(processedPath, router, {
        paths: "subset",
        queryParams: "ignored",
        fragment: "ignored",
        matrixParams: "ignored",
    });

    return active();
}