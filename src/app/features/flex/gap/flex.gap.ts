import { Component } from "@angular/core";
import { generateRange } from "../../shared/util/range.generator";

@Component({
    imports: [],
    selector: "app-flex-gap",
    styleUrl: "./flex.gap.css",
    templateUrl: "./flex.gap.html",
})
export class FlexGap {
    public getRange(range: number): number[] {
        return generateRange(range);
    }
}
