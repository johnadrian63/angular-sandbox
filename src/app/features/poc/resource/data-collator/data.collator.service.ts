import { Injectable, Resource, ResourceRef } from "@angular/core";

import { withPreviousValue } from "../../../shared/util/withpreviousvalue";

@Injectable()
export abstract class DataCollatorService<T> {
    protected abstract resource: ResourceRef<T | undefined>;
    private previousView?: Resource<T | undefined>;

    public get dataSource(): T | undefined {
        return this.view.hasValue() ? this.view.value() : undefined;
    }

    public isLoading(): boolean {
        return this.resource.isLoading();
    }

    public reload(): void {
        this.resource.reload();
    }

    public error(): Error | undefined {
        return this.resource.error();
    }

    private get view(): Resource<T | undefined> {
        return (this.previousView ??= withPreviousValue(this.resource));
    }
}

// data.collator.pagination.service (x)
// data.collator.pagination.route.service
// data.collator.sort.service
// data.collator.sort.route.service