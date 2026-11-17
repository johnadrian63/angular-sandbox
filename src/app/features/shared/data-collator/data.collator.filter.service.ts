import { Injectable } from "@angular/core";

import { FilterBuilderService } from "../filter-builder";
import { IDataCollatorFilterLoader } from "./data.collator.interface";

@Injectable()
export abstract class DataCollatorFilterService<T> extends FilterBuilderService<T> {

    public abstract override filterComponentsMapper: Map<keyof T, IDataCollatorFilterLoader>;

    public override get filterComponents(): [keyof T, IDataCollatorFilterLoader][] {
        return Array.from(this.filterComponentsMapper.entries());
    }

    public override async handleContainer(): Promise<void> {
        for (const [key, loader] of this.filterComponents) {
            await this.loadComponent(key, loader);
        }
    }
}
