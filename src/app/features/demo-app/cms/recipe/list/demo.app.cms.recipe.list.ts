import { Component, inject } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";

import { IRecipeAdapter } from "../demo.app.cms.model.adapter";
import { DemoAppCmsRecipeFilter } from "../filter/demo.app.cms.recipe.filter";
import { DemoAppCmsRecipeListCard } from "./card/demo.app.cms.recipe.list.card";
import { DemoAppCmsRecipeListService } from "./demo.app.cms.recipe.list.service";
import { DemoAppCmsRecipeListSortService } from "./demo.app.cms.recipe.list.sort.service";
import { DemoAppCmsRecipeListSkeleton } from "./skeleton/demo.app.cms.recipe.list.skeleton";
import { DemoAppCmsRecipeListPaginationService } from "./demo.app.cms.recipe.list.pagination.service";
import { PageSizeOptions, UiPaginatorComponent } from "../../../../shared/ui/paginator/ui.paginator.component";
import { DataCollatorService, DataCollatorSortService, DataCollatorPaginationService } from "../../../../shared/data-collator";

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
    imports: [
        DemoAppCmsRecipeListCard,
        DemoAppCmsRecipeListSkeleton,
        DemoAppCmsRecipeFilter,
        UiPaginatorComponent
    ]
})
export class DemoAppCmsRecipeList {

    public get recipes(): IRecipeAdapter[] | undefined {
        return this.recipeListService.dataSource;
    }

    public get isLoading(): boolean {
        return this.recipeListService.isLoading();
    }

    public get page(): number {
        return this.paginationService.page;
    }

    public get pageSize(): number {
        return this.paginationService.pageSize;
    }

    public get pageSizeOptions(): Array<PageSizeOptions> {
        return this.paginationService.pageSizeOptions;
    }

    public get count(): number {
        return this.paginationService.count;
    }

    private readonly recipeListService: DemoAppCmsRecipeListService = inject<DemoAppCmsRecipeListService>(DemoAppCmsRecipeListService);
    private readonly paginationService: DemoAppCmsRecipeListPaginationService = inject<DemoAppCmsRecipeListPaginationService>(DemoAppCmsRecipeListPaginationService);

    public handlePageChanged(pageEvent: PageEvent): void {
        this.paginationService.setPaging(pageEvent.pageIndex, pageEvent.pageSize);
    }
}