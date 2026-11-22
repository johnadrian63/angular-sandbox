import { DestroyRef, inject, Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { lastValueFrom, skip } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { DemoAppUserService } from "../../demo.app.post.service";
import { IPostAdapter, PostAdapter } from "../../demo.app.post.model";
import { TableBuilderService } from "../../../../../shared/table-builder";
import { DemoAppCmsPostListSearchFormService } from "../demo.app.cms.post.list.search.form.service";
import { DemoAppCmsPostListTableBuilderPaginationService } from "./demo.app.cms.post.list.table.builder.pagination.service";
import { DemoAppCmsPostListTableBuilderDataAdapter, DemoAppCmsPostListTableBuilderGetUsersDataFactory } from "./demo.app.cms.post.list.table.builder.adapter";

@Injectable()
export class DemoAppCmsPostListTableBuilderService extends TableBuilderService {
    private readonly destroyRef: DestroyRef = inject<DestroyRef>(DestroyRef);
    private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly demoAppUserService: DemoAppUserService = inject<DemoAppUserService>(DemoAppUserService);
    private readonly tableBuilderPaginationService: DemoAppCmsPostListTableBuilderPaginationService = inject<DemoAppCmsPostListTableBuilderPaginationService>(DemoAppCmsPostListTableBuilderPaginationService);
    private readonly searchFormService: DemoAppCmsPostListSearchFormService = inject<DemoAppCmsPostListSearchFormService>(DemoAppCmsPostListSearchFormService);

    public override init(): void {
        this.activatedRoute.queryParams
            .pipe(
                skip(1),
                takeUntilDestroyed(this.destroyRef)
            ).subscribe(async () => {
                this.refresh();
            });
    }

    public async getData(): Promise<IPostAdapter[]> {
        try {
            this.setLoading(true);

            const params = this.activatedRoute.snapshot.queryParams;
            const factory = DemoAppCmsPostListTableBuilderGetUsersDataFactory
                .create(params, this.tableBuilderPaginationService, this.searchFormService);
            const visitor = new DemoAppCmsPostListTableBuilderDataAdapter(this.demoAppUserService);
            const result = await lastValueFrom(factory.accept(visitor));

            this.tableBuilderPaginationService.setCount(result.total);

            const users: IPostAdapter[] = [];

            for (let user of result.posts) {
                users.push(new PostAdapter(user));
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
