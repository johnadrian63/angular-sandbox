import { Component, inject } from "@angular/core";

import { IRecipeAdapter } from "../demo.app.cms.model.adapter";
import { DataCollator } from "../../../../shared/data-collator/data.collator";
import { DataDisplayTextComponent } from "../../../../shared/data-display/text";
import { DemoAppCmsRecipeListCard } from "./card/demo.app.cms.recipe.list.card";
import { DemoAppCmsRecipeListService } from "./demo.app.cms.recipe.list.service";
import { DemoAppCmsRecipeListSortService } from "./demo.app.cms.recipe.list.sort.service";
import { DemoAppCmsRecipeListPaginationService } from "./demo.app.cms.recipe.list.pagination.service";
import { DataCollatorService, DataCollatorSortBaseService, DataCollatorPaginationService } from "../../../../shared/data-collator";

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
            provide: DataCollatorSortBaseService,
            useExisting: DemoAppCmsRecipeListSortService
        },
        DemoAppCmsRecipeListPaginationService,
        {
            provide: DataCollatorPaginationService,
            useExisting: DemoAppCmsRecipeListPaginationService
        }
    ],
    imports: [DataCollator, DemoAppCmsRecipeListCard]
})
export class DemoAppCmsRecipeList {

    public get recipes(): IRecipeAdapter[] {
        return this.service.dataSource();
    }

    private readonly service: DemoAppCmsRecipeListService = inject<DemoAppCmsRecipeListService>(DemoAppCmsRecipeListService);
}