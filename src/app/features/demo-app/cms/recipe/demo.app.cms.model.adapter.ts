import { ITableBuilderRowData } from "../../../shared/table-builder";
import { IRecipe } from "../../../shared/external-api/dummyjson/model/recipe/recipe.model";

export interface IRecipeAdapter extends ITableBuilderRowData, IRecipe { }

export class RecipeAdapter implements IRecipeAdapter {

    public get rowId(): string | number {
        return this.id;
    }

    public get id(): number {
        return this.data.id;
    }

    public get name(): string {
        return this.data.name;
    }

    public get ingredients(): string[] {
        return this.data.ingredients;
    }

    public get instructions(): string[] {
        return this.data.instructions;
    }

    public get prepTimeMinutes(): number {
        return this.data.prepTimeMinutes;
    }

    public get cookTimeMinutes(): number {
        return this.data.cookTimeMinutes;
    }

    public get servings(): number {
        return this.data.servings;
    }

    public get difficulty(): string {
        return this.data.difficulty;
    }

    public get cuisine(): string {
        return this.data.cuisine;
    }

    public get caloriesPerServing(): number {
        return this.data.caloriesPerServing;
    }

    public get tags(): string[] {
        return this.data.tags;
    }

    public get userId(): number {
        return this.data.userId;
    }

    public get image(): string {
        return this.data.image;
    }

    public get rating(): number {
        return this.data.rating;
    }

    public get reviewCount(): number {
        return this.data.reviewCount;
    }

    public get mealType(): string[] {
        return this.data.mealType;
    }

    constructor(private readonly data: IRecipe) { }
}
