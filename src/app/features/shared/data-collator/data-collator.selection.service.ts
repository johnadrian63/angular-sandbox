import { Injectable } from "@angular/core";
import {
    Observable,
    Subject
} from "rxjs";

import { IDataCollatorSelection } from "./data-collator.interface";

interface IDataCollatorRowSelection {
    selection$: Observable<IDataCollatorSelection>;

    select(id: string[], selected: boolean): void;
    isSelected(id: string): boolean;
}

@Injectable()
export class DataCollatorSelectionService implements IDataCollatorRowSelection {

    public get selection$(): Observable<IDataCollatorSelection> {
        return this.selectionSubject.asObservable();
    }

    public get selectedCount(): number {
        return this.selectedSet.size;
    }

    protected get selectionSet(): IDataCollatorSelection {
        return {
            selected: Array.from(this.selectedSet.values()),
            unselected: Array.from(this.unselectedSet.values())
        };
    }

    private readonly selectedSet: Set<string> = new Set<string>();

    protected readonly selectionSubject: Subject<IDataCollatorSelection> = new Subject<IDataCollatorSelection>();
    protected readonly unselectedSet: Set<string> = new Set<string>();

    public select(
        ids: string[],
        selected: boolean,
        emitValue: boolean = true
    ): void {
        this.handleSelection(ids, selected);

        if (emitValue) {
            this.selectionSubject.next(this.selectionSet);
        }

        this.unselectedSet.clear();
    }

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
}
