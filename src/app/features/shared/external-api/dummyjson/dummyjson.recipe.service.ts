import { inject, Service } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IRecipe, IRecipeCollection } from "./model/recipe/recipe.model";
import { IRecipeDefaultFilter } from "./model/recipe/recipe.filter.model";

@Service()
export class DummyJsonRecipeService {
    private readonly apiUrl = "https://dummyjson.com/recipes";
    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);

    public getList(filter: IRecipeDefaultFilter): Observable<IRecipeCollection> {
        return this.httpClient.get<IRecipeCollection>(this.apiUrl, {
            params: {
                ...filter
            }
        });
    }

    public getRecipe(recipeId: number): Observable<IRecipe> {
        return this.httpClient.get<IRecipe>(`${this.apiUrl}/${recipeId}`);
    }
}
