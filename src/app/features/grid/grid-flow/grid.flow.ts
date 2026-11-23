import { Component } from "@angular/core";
import { generateRange } from "../../shared/util/range.generator";

@Component({
    imports: [],
    selector: "app-grid-flow",
    styleUrl: "./grid.flow.css",
    templateUrl: "./grid.flow.html",
})
export class GridFlow {
    public getRange(range: number): number[] {
        return generateRange(range);
    }
}
