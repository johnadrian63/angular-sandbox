import { Component, computed, model, ModelSignal } from "@angular/core";

import { DataDisplayTextComponent } from "../text";
import { IDataDisplayVisitor } from "../data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data.display.abstract.component";

@Component({
    selector: "app-data-display-difficulty",
    templateUrl: "./data.display.difficulty.component.html",
    imports: [DataDisplayTextComponent]
})
export class DataDisplayDifficultyComponent extends DataDisplayAbstractComponent {
    public readonly value: ModelSignal<string> = model.required<string>();

    public readonly colorClass = computed<string>(() => {
        const value = this.value();

        if (value) {
            const color = this.colorMapper.get(value.toString().toLocaleLowerCase());

            return color ? `${color} shadow-sm font-semibold px-3 py-1 rounded-full` : "";
        }

        return "";
    })
    private readonly colorMapper = new Map<string, string>([
        ["easy", "bg-emerald-50 text-emerald-700"],
        ["medium", "bg-amber-50 text-amber-700"],
        ["hard", "bg-red-50 text-red-700"],
    ]);

    public override accept<T>(visitor: IDataDisplayDifficulty<T>): T {
        return visitor.visitDifficulty(this);
    }
}

export interface IDataDisplayDifficulty<T> extends IDataDisplayVisitor<T> {
    visitDifficulty(component: DataDisplayDifficultyComponent): T;
}
