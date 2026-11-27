import { DestroyRef, inject, Injectable, Resource, ResourceRef } from "@angular/core";

import { withPreviousValue } from "../../../shared/util/withpreviousvalue";

@Injectable()
export abstract class DataCollatorService<T> {
    protected abstract resource: ResourceRef<T | undefined>;
    private previousView?: Resource<T | undefined>;

    public get dataSource(): T | undefined {
        return this.view.hasValue() ? this.view.value() : undefined;
    }

    private readonly destroyRef: DestroyRef = inject<DestroyRef>(DestroyRef);

    constructor() {
        this.destroyRef.onDestroy(() => {
            this.reset();
        });
    }

    public abstract reset(): void;

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
