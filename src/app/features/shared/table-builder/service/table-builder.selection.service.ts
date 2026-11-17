import { Injectable } from "@angular/core";
import {
    Observable,
    Subject
} from "rxjs";

import { DataCollatorSelectionService } from "../../data-collator";
import { TableBuilderDataDisplaySelectionComponent } from "../component/data-display/selection/table-builder.data.display.selection.component";

@Injectable()
export class TableBuilderSelectionService extends DataCollatorSelectionService {

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

    private readonly selectAllSubject: Subject<boolean> = new Subject<boolean>();
    private readonly selectionComponentMapper: Map<string, TableBuilderDataDisplaySelectionComponent> = new Map<string, TableBuilderDataDisplaySelectionComponent>();
    private readonly currentRenderedSelectionSet: Set<string> = new Set<string>();
    private readonly currentSelectedIdsSet: Set<string> = new Set<string>();

    public register(id: string, component: TableBuilderDataDisplaySelectionComponent): void {
        this.selectionComponentMapper.set(id, component);

        this.currentRenderedSelectionSet.add(id);

        this.trackSelectionChange([id]);
    }

    public override select(
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
