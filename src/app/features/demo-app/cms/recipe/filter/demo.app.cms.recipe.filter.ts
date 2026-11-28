import { Component, inject, signal } from "@angular/core";
import { form, FormField, FormRoot } from "@angular/forms/signals";

import { DemoAppCmsRecipeListService } from "../list/demo.app.cms.recipe.list.service";

@Component({
    selector: "app-demo-app-cms-recipe-filter",
    templateUrl: "./demo.app.cms.recipe.filter.html",
    host: {
        class: "block"
    },
    imports: [FormRoot, FormField]
})
export class DemoAppCmsRecipeFilter {

    public get totalRecipes(): number {
        return this.recipeListService.dataSource?.length ?? 0;
    }

    public readonly searchModel = signal({
        search: ""
    });

    public readonly searchForm = form(this.searchModel, {
        submission: {
            action: async (path) => {
            }
        }
    });

    private readonly recipeListService: DemoAppCmsRecipeListService = inject<DemoAppCmsRecipeListService>(DemoAppCmsRecipeListService);
}