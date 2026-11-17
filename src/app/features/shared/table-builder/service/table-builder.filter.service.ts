import {
    Injectable,
    Signal,
    signal,
    WritableSignal
} from "@angular/core";

import { DataCollatorFilterService } from "../../data-collator";
import { ITableBuilderFilterLoader } from "./table-builder.filter.interface";

@Injectable()
export abstract class TableBuilderFilterService<T> extends DataCollatorFilterService<T> {

    public get loading(): Signal<boolean> {
        return this.loadingSignal.asReadonly();
    }

    public get containerClass(): string {
        return "";
    }

    // FIXME refactor this!
    private loadingSignal: WritableSignal<boolean> = signal(false);

    public abstract override filterComponentsMapper: Map<keyof T, ITableBuilderFilterLoader>;

    public override async initialize(): Promise<void> {
        this.loadingSignal.set(true);

        await super.initialize();

        this.loadingSignal.set(false);
    }

    public override get filterComponents(): [keyof T, ITableBuilderFilterLoader][] {
        return Array.from(this.filterComponentsMapper.entries());
    }
}
