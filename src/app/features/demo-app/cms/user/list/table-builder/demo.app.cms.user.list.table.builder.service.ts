import { DestroyRef, inject, Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { lastValueFrom, skip } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { DemoAppUserService } from "../../demo.app.user.service";
import { IUserAdapter, UserAdapter } from "../../demo.app.user.model";
import { TableBuilderService } from "../../../../../shared/table-builder";
import { DemoAppCmsUserListFilterSearchService } from "../filter/demo.app.cms.user.list.filter.search.service";
import { DemoAppCmsUserListTableBuilderPaginationService } from "./demo.app.cms.user.list.table.builder.pagination.service";
import { DemoAppCmsUserListTableBuilderDataAdapter, DemoAppCmsUserListTableBuilderGetUsersDataFactory } from "./demo.app.cms.user.list.table.builder.adapter";

@Injectable()
export class DemoAppCmsUserListTableBuilderService extends TableBuilderService {
    private readonly destroyRef: DestroyRef = inject<DestroyRef>(DestroyRef);
    private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly demoAppUserService: DemoAppUserService = inject<DemoAppUserService>(DemoAppUserService);
    private readonly tableBuilderPaginationService: DemoAppCmsUserListTableBuilderPaginationService = inject<DemoAppCmsUserListTableBuilderPaginationService>(DemoAppCmsUserListTableBuilderPaginationService);
    private readonly searchFormService: DemoAppCmsUserListFilterSearchService = inject<DemoAppCmsUserListFilterSearchService>(DemoAppCmsUserListFilterSearchService);

    public override init(): void {
        this.activatedRoute.queryParams
            .pipe(
                skip(1),
                takeUntilDestroyed(this.destroyRef)
            ).subscribe(async () => {
                this.refresh();
            });
    }

    public async getData(): Promise<IUserAdapter[]> {
        try {
            this.setLoading(true);

            const params = this.activatedRoute.snapshot.queryParams;
            const factory = DemoAppCmsUserListTableBuilderGetUsersDataFactory
                .create(params, this.tableBuilderPaginationService, this.searchFormService);
            const visitor = new DemoAppCmsUserListTableBuilderDataAdapter(this.demoAppUserService);
            const result = await lastValueFrom(factory.accept(visitor));

            this.tableBuilderPaginationService.setCount(result.total);

            const users: IUserAdapter[] = [];

            for (let user of result.users) {
                users.push(new UserAdapter(user));
            }

            return users;
        } catch (error) {
            return [];
        } finally {
            this.setLoading(false);
        }
    }

    public override reset(): void {
        // do cleanup here
    }
}
