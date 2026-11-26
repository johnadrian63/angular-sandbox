import { Component, input } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import { IRecipeAdapter } from "../../demo.app.cms.model.adapter";
import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { DataDisplayLinkComponent } from "../../../../../shared/data-display/link";
import { DataDisplayDifficultyComponent } from "../../../../../shared/data-display/difficulty";
import { DataDisplayRating } from "../../../../../shared/data-display/rating/data.display.rating";

@Component({
    selector: "app-demo-app-cms-recipe-list-card",
    templateUrl: "./demo.app.cms.recipe.list.card.html",
    imports: [
        FaIconComponent,
        DataDisplayTextComponent,
        DataDisplayRating,
        DataDisplayDifficultyComponent,
        DataDisplayLinkComponent
    ]
})
export class DemoAppCmsRecipeListCard {
    public readonly recipe = input.required<IRecipeAdapter>();
    public readonly cookingTimeIcon = faClock;
    public readonly servingsIcon = faMugHot;

    public get url(): string {
        return `../recipes/view/${this.recipe().id}`;
    }
}
