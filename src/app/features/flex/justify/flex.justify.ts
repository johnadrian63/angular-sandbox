import { Component } from "@angular/core";
import { generateRange } from "../../shared/util/range.generator";

@Component({
    imports: [],
    selector: "app-flex-justify",
    styleUrl: "./flex.justify.css",
    templateUrl: "./flex.justify.html",
})
export class FlexJustify {
    public getRange(range: number): number[] {
        return generateRange(range);
    }
}
