import { inject, Injectable, InputSignal, resource, ResourceRef } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { lastValueFrom } from "rxjs";

import { createRegistry } from "../../../../shared/util/registry";
import { IRecipeAdapter, RecipeAdapter } from "../demo.app.cms.model.adapter";
import { DataCollatorService } from "../../../../shared/data-collator/migration/data.collator.service";
import { DummyJsonRecipeService } from "../../../../shared/external-api/dummyjson/dummyjson.recipe.service";

interface IRecipeResourceParam {
    recipeId: number;
}

interface IInputDeps {
    recipeId: InputSignal<number>;
}

@Injectable()
export class DemoAppCmsRecipeViewService extends DataCollatorService<IRecipeAdapter> {

    protected override resource: ResourceRef<IRecipeAdapter | undefined> = resource({
        params: () => {
            const recipeId = this.params()["id"];

            if (!recipeId) {
                return undefined;
            }

            return { recipeId };
        },
        loader: ({ params }) => this.fetchData(params)
    });

    private readonly recipeService: DummyJsonRecipeService = inject<DummyJsonRecipeService>(DummyJsonRecipeService);
    private readonly registry = createRegistry<IInputDeps>();
    public readonly activatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    public readonly params = toSignal(this.activatedRoute.params, {
        initialValue: { id: undefined }
    });

    protected async fetchData(params: IRecipeResourceParam): Promise<IRecipeAdapter> {
        const request = this.recipeService.getRecipe(params.recipeId);
        const result = await lastValueFrom(request);

        return new RecipeAdapter(result);
    }

    public registerSignalDeps(deps: IInputDeps): void {
        this.registry.register(deps);
    }

    public override reset(): void {
        // do nothing
    }
}
