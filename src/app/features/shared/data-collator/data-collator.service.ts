import {
    Injectable,
    Signal,
    WritableSignal,
    signal
} from "@angular/core";
import {
    Observable,
    Subject
} from "rxjs";

import {
    IDataCollatorRowData,
    IDataCollatorService
} from "./data-collator.interface";

@Injectable()
export abstract class DataCollatorService implements IDataCollatorService {

    public get onRefresh(): Observable<void> {
        return this.refreshSubject.asObservable();
    }

    public get loading(): Signal<boolean> {
        return this.loadingSignal.asReadonly();
    }

    private readonly loadingSignal: WritableSignal<boolean> = signal(false);
    private readonly refreshSubject: Subject<void> = new Subject<void>();

    public abstract reset(): void;
    public abstract init(): void;
    public abstract getData(): Promise<IDataCollatorRowData[]>;

    public refresh(): void {
        this.refreshSubject.next();
    }

    public setLoading(loading: boolean): void {
        this.loadingSignal.set(loading);
    }
}
