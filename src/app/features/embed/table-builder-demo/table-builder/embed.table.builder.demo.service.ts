import { DestroyRef, inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { lastValueFrom, skip } from "rxjs";

import { TableBuilderService } from "../../../shared/table-builder";
import { EmbedTableBuilderPaginationService } from "./embed.table.builder.demo.pagination.service";
import { IUserAdapter, IUserCollection, UserAdapter } from "../../../poc/table-builder/poc.table.builder.model";
import { TABLE_BUILDER_REFRESH_TOKEN, TableBuilderRefresher } from "../../../shared/table-builder/table.builder.token";

@Injectable()
export class EmbedTableBuilderService extends TableBuilderService {
    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);
    private readonly tableBuilderPaginationService: EmbedTableBuilderPaginationService = inject<EmbedTableBuilderPaginationService>(EmbedTableBuilderPaginationService);
    private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly destroyRef: DestroyRef = inject<DestroyRef>(DestroyRef);
    private readonly refresher: TableBuilderRefresher = inject<TableBuilderRefresher>(TABLE_BUILDER_REFRESH_TOKEN);

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
