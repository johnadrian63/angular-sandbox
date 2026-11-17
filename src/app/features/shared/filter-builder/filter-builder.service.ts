import {
    ComponentRef,
    createComponent,
    EnvironmentInjector,
    Injectable,
    Injector,
    Provider,
} from "@angular/core";
import {
    Observable,
    Subject
} from "rxjs";

import {
    IFilterBuilderComponent,
    IFilterBuilderLoader,
    IFilterBuilderVisitor
} from "./filter-builder.interface";

import { ValueOf } from "../util/ValueOf";
import { ContextBuilderService } from "../context-builder";
import { FilterBuilderDriverService } from "./driver/filter-builder.driver.service";
import { FilterBuilderContextController } from "./context/filter-builder.context.controller";
import { FilterBuilderContextDataLoader } from "./context/filter-builder.context.data.loader";

type FilterBuilderLoaderComponentMapper<T> = [keyof T, IFilterBuilderLoader];

@Injectable()
export abstract class FilterBuilderService<T> extends ContextBuilderService<T> {

    public get filterData(): T {
        return this.filterDriverService.filterData;
    }

    public get filterKeys(): Array<keyof T> {
        return Array.from(this.filterComponentsMapper.keys());
    }

    public get filterComponents(): FilterBuilderLoaderComponentMapper<T>[] {
        return Array.from(this.filterComponentsMapper.entries());
    }

    public get selectedFilters(): FilterBuilderLoaderComponentMapper<T>[] {
        return this.filterComponents.filter(([key, loader]) => {
            return loader.selected;
        });
    }

    public get filterApplied(): Observable<T> {
        return this.applyFilterSubject.asObservable();
    }

    public abstract filterComponentsMapper: Map<keyof T, IFilterBuilderLoader>;

    public readonly applyFilterSubject: Subject<T> = new Subject<T>();

    protected readonly componentRefMapper: Map<keyof T, ComponentRef<IFilterBuilderComponent>> = new Map<keyof T, ComponentRef<IFilterBuilderComponent>>();
    protected readonly context: FilterBuilderContextController = new FilterBuilderContextController();

    public abstract handleContainer(): Promise<void>;

    constructor(
        private readonly filterDriverService: FilterBuilderDriverService<T>,
        private readonly environmentInjector: EnvironmentInjector
    ) {
        // FIXME refactor this!
        super(new FilterBuilderContextDataLoader());

        this.filterDriverService.setBuilder(this);
    }

    public async initialize(): Promise<void> {
        await this.handleContainer();
    }

    // FIXME refactor this!
    public applyFilter(filterKey: keyof T, value: ValueOf<T>): void {
        this.filterDriverService.applyFilter(filterKey, value);
    }

    public reset(): void {
        this.filterDriverService.reset();
    }

    public clearValue(): void {
        this.context.clearValue();
    }

    public getComponentRef(key: keyof T): ComponentRef<IFilterBuilderComponent> {
        // FIXME refactor this!
        return this.componentRefMapper.get(key)!;
    }

    protected abstract handleVisitor(filterKey: keyof T): IFilterBuilderVisitor;

    protected async loadComponent(filterKey: keyof T, loader: IFilterBuilderLoader): Promise<void> {
        const component = await loader.component;

        const providers: Provider[] = [
            {
                provide: FilterBuilderService<T>,
                useValue: this
            }
        ];

        if (loader.providers) {
            providers.push(...loader.providers);
        }

        const componentRef = createComponent(component, {
            environmentInjector: this.environmentInjector,
            elementInjector: Injector.create({
                providers: providers
            })
        });

        if (!this.componentRefMapper.has(filterKey)) {
            this.componentRefMapper.set(filterKey, componentRef);
        }

        const componentInstance = componentRef.instance;

        componentInstance.label.set(loader.label);

        await componentInstance.loadData();

        const visitor = this.handleVisitor(filterKey);

        if (!visitor) {
            throw new Error("visitor handler is not defined.");
        }

        componentInstance.accept(visitor);

        componentRef.changeDetectorRef.detectChanges();
    }
}
