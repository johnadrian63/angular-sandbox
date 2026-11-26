import { inject, Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";

import { IRecipeDefaultFilter } from "../model/recipe.filter.model";
import { DataCollatorService } from "../../../../shared/data-collator";
import { DemoAppCmsRecipeService } from "../demo.app.cms.recipe.service";
import { IRecipeAdapter, RecipeAdapter } from "../demo.app.cms.model.adapter";
import { DemoAppCmsRecipeListSortService } from "./demo.app.cms.recipe.list.sort.service";
import { DemoAppCmsRecipeListPaginationService } from "./demo.app.cms.recipe.list.pagination.service";

@Injectable()
export class DemoAppCmsRecipeListService extends DataCollatorService<IRecipeAdapter> {
    private readonly recipeService: DemoAppCmsRecipeService = inject<DemoAppCmsRecipeService>(DemoAppCmsRecipeService);
    private readonly paginationService: DemoAppCmsRecipeListPaginationService = inject<DemoAppCmsRecipeListPaginationService>(DemoAppCmsRecipeListPaginationService);
    private readonly sortService: DemoAppCmsRecipeListSortService = inject<DemoAppCmsRecipeListSortService>(DemoAppCmsRecipeListSortService);

    public override init(): void {
        // do nothing
    }

    protected override async request(): Promise<IRecipeAdapter[]> {
        const limit = this.paginationService.pageSize;
        const skip = limit * this.paginationService.page;

        const filter: IRecipeDefaultFilter = {
            skip,
            limit
        };

        const sortBy = this.sortService.sort.column!;
        const order = this.sortService.sort.direction!;

        if (sortBy && order) {
            filter.sortBy = sortBy;
            filter.order = order;
        }

        const result = await lastValueFrom(this.recipeService.getList(filter));

        this.paginationService.setCount(result.total);

        const recipes: IRecipeAdapter[] = [];

        for (let recipe of result.recipes) {
            recipes.push(new RecipeAdapter(recipe));
        }

        return recipes;
    }

    public override reset(): void {
        // do nothing
    }
}
