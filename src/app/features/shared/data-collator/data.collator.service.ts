import { DestroyRef, Injectable, Signal, WritableSignal, inject, signal } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { IDataCollatorRowData, IDataCollatorService } from "./data-collator.interface";

@Injectable()
export abstract class DataCollatorService<T extends IDataCollatorRowData> implements IDataCollatorService {

    public get onRefresh(): Observable<void> {
        return this.refreshSubject.asObservable();
    }

    public get loading(): Signal<boolean> {
        return this.loadingSignal.asReadonly();
    }

    public readonly dataSource: WritableSignal<T[]> = signal<T[]>([]);

    private readonly loadingSignal: WritableSignal<boolean> = signal(false);
    private readonly refreshSubject: Subject<void> = new Subject<void>();
    private readonly destroyRef: DestroyRef = inject<DestroyRef>(DestroyRef);

    constructor() {
        this.destroyRef.onDestroy(() => {
            this.reset();
        });
    }

    public abstract init(): void;
    protected abstract request(): Promise<T[]>;
    public abstract reset(): void;

    public async loadRequest(): Promise<T[]> {
        const result = await this.request();

        this.dataSource.set(result);

        return this.dataSource();
    }

    public refresh(): void {
        this.refreshSubject.next();
    }

    public setLoading(loading: boolean): void {
        this.loadingSignal.set(loading);
    }
}
