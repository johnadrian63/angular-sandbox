import { DestroyRef, inject, Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { lastValueFrom, skip } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { DemoAppCmsUserService } from "../../demo.app.cms.user.service";
import { TableBuilderService } from "../../../../../shared/table-builder";
import { IUserAdapter, UserAdapter } from "../../demo.app.cms.user.model.adapter";
import { DemoAppCmsUserListFilterSearchService } from "../filter/demo.app.cms.user.list.filter.search.service";
import { DemoAppCmsUserListTableBuilderSortService } from "./demo.app.cms.user.list.table.builder.sort.service";
import { DemoAppCmsUserListTableBuilderPaginationService } from "./demo.app.cms.user.list.table.builder.pagination.service";
import { TABLE_BUILDER_REFRESH_TOKEN, TableBuilderRefresher } from "../../../../../shared/table-builder/table.builder.token";
import { DemoAppCmsUserListTableBuilderDataAdapter, DemoAppCmsUserListTableBuilderGetUsersDataFactory } from "./demo.app.cms.user.list.table.builder.adapter";

@Injectable()
export class DemoAppCmsUserListTableBuilderService extends TableBuilderService {
    private readonly userService: DemoAppCmsUserService = inject<DemoAppCmsUserService>(DemoAppCmsUserService);
    private readonly tableBuilderPaginationService: DemoAppCmsUserListTableBuilderPaginationService = inject<DemoAppCmsUserListTableBuilderPaginationService>(DemoAppCmsUserListTableBuilderPaginationService);
    private readonly tableBuilderSortService: DemoAppCmsUserListTableBuilderSortService = inject<DemoAppCmsUserListTableBuilderSortService>(DemoAppCmsUserListTableBuilderSortService);
    private readonly searchFormService: DemoAppCmsUserListFilterSearchService = inject<DemoAppCmsUserListFilterSearchService>(DemoAppCmsUserListFilterSearchService);
    private readonly refresher: TableBuilderRefresher = inject<TableBuilderRefresher>(TABLE_BUILDER_REFRESH_TOKEN);
    private readonly destroyRef: DestroyRef = inject<DestroyRef>(DestroyRef);
    private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    public override init(): void {
        this.activatedRoute.queryParams
            .pipe(
                skip(1),
                takeUntilDestroyed(this.destroyRef)
            ).subscribe(async () => {
                this.refresher.refresh();
            });
    }

    public async getData(): Promise<IUserAdapter[]> {
        try {
            this.setLoading(true);

            const params = this.activatedRoute.snapshot.queryParams;
            const factory = DemoAppCmsUserListTableBuilderGetUsersDataFactory.create(
                params,
                this.tableBuilderPaginationService,
                this.tableBuilderSortService,
                this.searchFormService,
            );
            const visitor = new DemoAppCmsUserListTableBuilderDataAdapter(this.userService);
            const result = await lastValueFrom(factory.accept(visitor));

            this.tableBuilderPaginationService.setCount(result.total);

            const users: IUserAdapter[] = [];

            for (let user of result.users) {
                users.push(new UserAdapter(user));
            }

            return users;
        } catch (error) {
            console.warn(error);

            return [];
        } finally {
            this.setLoading(false);
        }
    }

    public override reset(): void {
        // do nothing
    }
}
