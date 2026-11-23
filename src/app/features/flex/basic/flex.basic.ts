import { Component } from "@angular/core";
import { generateRange } from "../../shared/util/range.generator";

@Component({
    imports: [],
    selector: "app-flex-basic",
    styleUrl: "./flex.basic.css",
    templateUrl: "./flex.basic.html",
})
export class FlexBasic {
    public getRange(range: number): number[] {
        return generateRange(range);
    }
}
