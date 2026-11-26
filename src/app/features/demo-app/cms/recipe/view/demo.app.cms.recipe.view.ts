import { Component, inject, resource } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";

import { DemoAppCmsRecipeViewService } from "./demo.app.cms.recipe.view.service";

@Component({
    selector: "app-demo-app-cms-recipe-view",
    templateUrl: "./demo.app.cms.recipe.view.html",
    providers: [
        DemoAppCmsRecipeViewService
    ]
})
export class DemoAppCmsRecipeView {
    public readonly activatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    public readonly params = toSignal(this.activatedRoute.params, {
        initialValue: { id: undefined }
    });

    public recipeResource = resource({
        params: () => {
            const id = this.params()["id"];

            this.recipeViewService.recipeId.set(id);

            return { id: id }
        },
        loader: () => this.recipeViewService.loadRequest()
    });

    private readonly recipeViewService = inject<DemoAppCmsRecipeViewService>(DemoAppCmsRecipeViewService);
}