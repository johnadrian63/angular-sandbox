import { inject, Injectable, ResourceRef, resource } from "@angular/core";
import { lastValueFrom } from "rxjs";

import { IRecipeAdapter, RecipeAdapter } from "../demo.app.cms.model.adapter";
import { DemoAppCmsRecipeListSortService } from "./demo.app.cms.recipe.list.sort.service";
import { DemoAppCmsRecipeListPaginationService } from "./demo.app.cms.recipe.list.pagination.service";
import { DataCollatorService } from "../../../../shared/data-collator/migration/data.collator.service";
import { DummyJsonRecipeService } from "../../../../shared/external-api/dummyjson/dummyjson.recipe.service";
import { IRecipeDefaultFilter } from "../../../../shared/external-api/dummyjson/model/recipe/recipe.filter.model";

@Injectable()
export class DemoAppCmsRecipeListService extends DataCollatorService<IRecipeAdapter[]> {
    protected override resource: ResourceRef<IRecipeAdapter[] | undefined> = resource({
        params: () => {
            const params: IRecipeDefaultFilter = {
                skip: this.paginationService.page,
                limit: this.paginationService.pageSize
            };

            const sortBy = this.sortService.sortBy!;
            const order = this.sortService.order!;

            if (sortBy && order) {
                params.sortBy = sortBy;
                params.order = order;
            }

            return params;
        },
        loader: ({ params, abortSignal }) => this.fetchData(params)
    })
    private readonly recipeService: DummyJsonRecipeService = inject<DummyJsonRecipeService>(DummyJsonRecipeService);
    private readonly paginationService: DemoAppCmsRecipeListPaginationService = inject<DemoAppCmsRecipeListPaginationService>(DemoAppCmsRecipeListPaginationService);
    private readonly sortService: DemoAppCmsRecipeListSortService = inject<DemoAppCmsRecipeListSortService>(DemoAppCmsRecipeListSortService);

    protected async fetchData(params: IRecipeDefaultFilter): Promise<IRecipeAdapter[]> {
        const result = await lastValueFrom(this.recipeService.getList(params));

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
