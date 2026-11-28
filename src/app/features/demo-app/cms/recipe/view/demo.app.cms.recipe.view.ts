import { Component, inject } from "@angular/core";

import { IRecipeAdapter } from "../demo.app.cms.model.adapter";
import { DataDisplayLinkComponent } from "../../../../shared/data-display/link";
import { DataDisplayTextComponent } from "../../../../shared/data-display/text";
import { DemoAppCmsRecipeViewService } from "./demo.app.cms.recipe.view.service";
import { DataDisplayRating } from "../../../../shared/data-display/rating/data.display.rating";
import { DemoAppCmsRecipeViewSkeleton } from "./skeleton/demo.app.cms.recipe.view.skeleton";

@Component({
    selector: "app-demo-app-cms-recipe-view",
    templateUrl: "./demo.app.cms.recipe.view.html",
    providers: [DemoAppCmsRecipeViewService],
    imports: [DataDisplayLinkComponent, DataDisplayTextComponent, DataDisplayRating, DemoAppCmsRecipeViewSkeleton]
})
export class DemoAppCmsRecipeView {

    public get recipe(): IRecipeAdapter | undefined {
        return this.recipeViewService.dataSource;
    }

    public get isLoading(): boolean {
        return this.recipeViewService.isLoading();
    }

    private readonly recipeViewService = inject<DemoAppCmsRecipeViewService>(DemoAppCmsRecipeViewService);
}