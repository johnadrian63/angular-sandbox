import { Component, inject } from "@angular/core";

import { IRecipeAdapter } from "../demo.app.cms.model.adapter";
import { DemoAppCmsRecipeListCard } from "./card/demo.app.cms.recipe.list.card";
import { DemoAppCmsRecipeListService } from "./demo.app.cms.recipe.list.service";
import { DemoAppCmsRecipeListSortService } from "./demo.app.cms.recipe.list.sort.service";
import { DemoAppCmsRecipeListSkeleton } from "./skeleton/demo.app.cms.recipe.list.skeleton";
import { DemoAppCmsRecipeListPaginationService } from "./demo.app.cms.recipe.list.pagination.service";
import { DataCollatorService, DataCollatorSortService, DataCollatorPaginationService } from "../../../../shared/data-collator/migration";

@Component({
    selector: "app-demo-app-cms-recipe-list",
    templateUrl: "./demo.app.cms.recipe.list.html",
    providers: [
        DemoAppCmsRecipeListService,
        {
            provide: DataCollatorService,
            useExisting: DemoAppCmsRecipeListService
        },
        DemoAppCmsRecipeListSortService,
        {
            provide: DataCollatorSortService,
            useExisting: DemoAppCmsRecipeListSortService
        },
        DemoAppCmsRecipeListPaginationService,
        {
            provide: DataCollatorPaginationService,
            useExisting: DemoAppCmsRecipeListPaginationService
        }
    ],
    imports: [DemoAppCmsRecipeListCard, DemoAppCmsRecipeListSkeleton]
})
export class DemoAppCmsRecipeList {

    public get recipes(): IRecipeAdapter[] | undefined {
        return this.recipeListService.dataSource;
    }

    public get isLoading(): boolean {
        return this.recipeListService.isLoading();
    }

    private readonly recipeListService: DemoAppCmsRecipeListService = inject<DemoAppCmsRecipeListService>(DemoAppCmsRecipeListService);
}