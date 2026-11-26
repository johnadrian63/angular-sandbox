import { Component, input } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

import { DataDisplayTextComponent } from "../text";
import { generateRange } from "../../util/range.generator";
import { IDataDisplayVisitor } from "../data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data.display.abstract.component";

@Component({
    selector: "app-data-display-rating",
    templateUrl: "./data.display.rating.html",
    imports: [FaIconComponent, DataDisplayTextComponent]
})
export class DataDisplayRating extends DataDisplayAbstractComponent {

    public get maxRatings(): number[] {
        return generateRange(5);
    }

    public readonly rating = input.required<number>();
    public readonly fullStarIcon = faStarSolid;
    public readonly emptyStarIcon = faStar;
    public readonly halfStarIcon = faStarHalfStroke;

    public override accept<T>(visitor: IDataDisplayRating<T>): T {
        return visitor.visitRating(this);
    }
}

export interface IDataDisplayRating<T> extends IDataDisplayVisitor<T> {
    visitRating(component: DataDisplayRating): T;
}