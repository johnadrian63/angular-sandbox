import { Injectable, ResourceRef } from "@angular/core";

@Injectable()
export abstract class DataCollatorService<T> {
    protected abstract resource: ResourceRef<T | undefined>;

    public get dataSource(): T | undefined {
        return this.resource.hasValue() ? this.resource.value() : undefined;
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
}
