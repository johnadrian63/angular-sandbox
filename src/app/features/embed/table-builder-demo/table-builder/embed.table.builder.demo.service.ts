import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

import { TableBuilderService } from "../../../shared/table-builder";
import { IUserAdapter, IUserCollection, UserAdapter } from "../../../poc/table-builder/poc.table.builder.model";
import { PocTableBuilderPaginationService } from "./embed.table.builder.demo.pagination.service";

@Injectable()
export class PocTableBuilderService extends TableBuilderService {
    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);
    private readonly tableBuilderPaginationService: PocTableBuilderPaginationService = inject<PocTableBuilderPaginationService>(PocTableBuilderPaginationService);

    public override init(): void {
        this.tableBuilderPaginationService.queryParamsChange
            .subscribe(async () => {
                this.refresh();
            });
    }

    public async getData(): Promise<IUserAdapter[]> {
        try {
            this.setLoading(true);

            const apiUrl = "https://dummyjson.com/users";
            const result = await lastValueFrom(this.httpClient.get<IUserCollection>(apiUrl, {
                params: {
                    skip: this.tableBuilderPaginationService.page,
                    limit: this.tableBuilderPaginationService.pageSize
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
