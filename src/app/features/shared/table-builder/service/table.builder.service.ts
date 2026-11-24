import { Injectable, Signal, signal, WritableSignal } from "@angular/core";

import { ITableBuilderRowData } from "../model/interface";

@Injectable()
export abstract class TableBuilderService {

    public get loading(): Signal<boolean> {
        return this.loadingSignal.asReadonly();
    }

    private readonly loadingSignal: WritableSignal<boolean> = signal(false);

    public abstract init(): void;
    public abstract getData(): Promise<ITableBuilderRowData[]>;
    public abstract reset(): void;

    public setLoading(loading: boolean): void {
        this.loadingSignal.set(loading);
    }
}
