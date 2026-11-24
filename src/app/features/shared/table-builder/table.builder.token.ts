import { InjectionToken, Provider } from "@angular/core";
import { Observable, Subject } from "rxjs";

export class TableBuilderRefresher {

    public get onRefresh(): Observable<void> {
        return this.refreshSubject.asObservable();
    }

    private readonly refreshSubject = new Subject<void>();

    public refresh(): void {
        this.refreshSubject.next();
    }
}

export const TABLE_BUILDER_REFRESH_TOKEN = new InjectionToken<TableBuilderRefresher>("TABLE_BUILDER_REFRESH_TOKEN");

export const TABLE_BUILDER_REFRESHER_PROVIDER: Provider = {
    provide: TABLE_BUILDER_REFRESH_TOKEN,
    useClass: TableBuilderRefresher
};