import { inject, Injectable, signal, WritableSignal } from "@angular/core";
import { lastValueFrom } from "rxjs";

import { IRecipeAdapter, RecipeAdapter } from "../demo.app.cms.model.adapter";
import { DataCollatorService } from "../../../../shared/data-collator";
import { DummyJsonRecipeService } from "../../../../shared/external-api/dummyjson/dummyjson.recipe.service";

@Injectable()
export class DemoAppCmsRecipeViewService extends DataCollatorService<IRecipeAdapter> {
    public readonly recipeId: WritableSignal<number | undefined> = signal<number | undefined>(undefined);
    private readonly recipeService: DummyJsonRecipeService = inject<DummyJsonRecipeService>(DummyJsonRecipeService);

    public override init(): void {
        // do nothing
    }

    protected override  async request(): Promise<IRecipeAdapter[]> {
        throw new Error("not yet implemented.");
        // try {
        //     const request = this.recipeService.getRecipe(this.recipeId()!);
        //     const result = await lastValueFrom(request);

        //     return new RecipeAdapter(result)];
        // } catch (error) {
        //     console.error("error", error);

        //     return null;
        // } finally {

        // }
    }

    public override reset(): void {
        // do nothing
    }
}
