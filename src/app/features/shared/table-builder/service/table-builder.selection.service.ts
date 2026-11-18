import { Injectable } from "@angular/core";
import {
    Observable,
    Subject
} from "rxjs";

import { TableBuilderDataDisplaySelectionComponent } from "../component/data-display/selection/table-builder.data.display.selection.component";

export interface ITableBuilderSelection {
    selected: string[];
    unselected: string[];
}

@Injectable()
export class TableBuilderSelectionService {

    public get selection$(): Observable<ITableBuilderSelection> {
        return this.selectionSubject.asObservable();
    }

    public get selectedCount(): number {
        return this.selectedSet.size;
    }

    protected get selectionSet(): ITableBuilderSelection {
        return {
            selected: Array.from(this.selectedSet.values()),
            unselected: Array.from(this.unselectedSet.values())
        };
    }

    protected readonly selectionSubject: Subject<ITableBuilderSelection> = new Subject<ITableBuilderSelection>();
    protected readonly unselectedSet: Set<string> = new Set<string>();

    private readonly selectedSet: Set<string> = new Set<string>();
    private readonly selectAllSubject: Subject<boolean> = new Subject<boolean>();
    private readonly selectionComponentMapper: Map<string, TableBuilderDataDisplaySelectionComponent> = new Map<string, TableBuilderDataDisplaySelectionComponent>();
    private readonly currentRenderedSelectionSet: Set<string> = new Set<string>();
    private readonly currentSelectedIdsSet: Set<string> = new Set<string>();

    public isSelected(id: string): boolean {
        return this.selectedSet.has(id);
    }

    public clearSelection(): void {
        this.selectedSet.clear();
        this.unselectedSet.clear();
    }

    protected handleSelection(
        ids: string[],
        selected: boolean
    ): void {
        for (let index = 0; index < ids.length; index++) {
            const id = ids[index];

            if (selected) {
                this.selectedSet.add(id);
            } else {

                if (this.selectedSet.has(id)) {
                    this.unselectedSet.add(id);
                }

                this.selectedSet.delete(id);
            }
        }
    }

    public get selectAll$(): Observable<boolean> {
        return this.selectAllSubject.asObservable();
    }

    public get masterSelectionEnabled(): boolean {
        return true;
    }

    public get allSelected(): boolean {
        return this.currentSelectedIdsSet.size > 0 && this.currentSelectedIdsSet.size === this.currentRenderedSelectionSet.size;
    }

    public get partiallySelected(): boolean {
        return this.currentSelectedIdsSet.size > 0 && this.currentSelectedIdsSet.size < this.currentRenderedSelectionSet.size;
    }

    public register(id: string, component: TableBuilderDataDisplaySelectionComponent): void {
        this.selectionComponentMapper.set(id, component);

        this.currentRenderedSelectionSet.add(id);

        this.trackSelectionChange([id]);
    }

    public select(
        ids: string[],
        selected: boolean,
        emitValue: boolean = true
    ): void {
        this.handleSelection(ids, selected);
        this.trackSelectionChange(ids);

        if (emitValue) {
            this.selectionSubject.next(this.selectionSet);
        }

        this.unselectedSet.clear();
    }

    public selectAll(selected: boolean): void {
        const currentRenderedSelectionIds = Array.from(this.currentRenderedSelectionSet.values());

        for (let index = 0; index < currentRenderedSelectionIds.length; index++) {
            const id = currentRenderedSelectionIds[index];
            const component = this.selectionComponentMapper.get(id);

            if (component) {
                component.select(selected, false);
            }
        }
    }

    public reset(): void {
        this.currentRenderedSelectionSet.clear();
        this.currentSelectedIdsSet.clear();
    }

    protected trackSelectionChange(ids: string[]): void {
        for (let index = 0; index < ids.length; index++) {
            const id = ids[index];

            if (this.isSelected(id)) {
                this.currentSelectedIdsSet.add(id);
            }
        }

        for (let index = 0; index < this.selectionSet.unselected.length; index++) {
            const id = this.selectionSet.unselected[index];

            this.currentSelectedIdsSet.delete(id);
        }
    }
}
