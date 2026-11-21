import { DestroyRef, inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { lastValueFrom, skip } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { TableBuilderService } from "../../../../../shared/table-builder";
import { IUserAdapter, IUserCollection, UserAdapter } from "./user.model";
import { DemoAppCmsUserListTableBuilderPaginationService } from "./demo.app.cms.user.list.table.builder.pagination.service";

@Injectable()
export class DemoAppCmsUserListTableBuilderService extends TableBuilderService {
    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);
    private readonly tableBuilderPaginationService: DemoAppCmsUserListTableBuilderPaginationService = inject<DemoAppCmsUserListTableBuilderPaginationService>(DemoAppCmsUserListTableBuilderPaginationService);
    private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly destroyRef: DestroyRef = inject<DestroyRef>(DestroyRef);

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

            const apiUrl = "https://dummyjson.com/users";

            const pageSize = this.tableBuilderPaginationService.pageSize;
            const page = this.tableBuilderPaginationService.page;
            const result = await lastValueFrom(this.httpClient.get<IUserCollection>(apiUrl, {
                params: {
                    skip: pageSize * page,
                    limit: pageSize
                }
            }));

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
