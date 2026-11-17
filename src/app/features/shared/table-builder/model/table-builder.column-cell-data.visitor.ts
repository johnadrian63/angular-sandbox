import { IDataDisplayVisitor } from "../../data-display/data-display.visitor.interface";
import {
    DataDisplayTextComponent,
    DataDisplayRadioButtonComponent,
    DataDisplayCheckboxComponent,
    DataDisplayButtonComponent,
    DataDisplayNumberComponent,
    DataDisplayLinkComponent,
    DataDisplayTextboxComponent,
    DataDisplaySelectionComponent,
    DataDisplayDateTimeComponent,
    DataDisplayThumbnailComponent
} from "../component";

export class TableBuilderColumnCellDataVisitor implements IDataDisplayVisitor<void> {
    public visitSelection(component: DataDisplaySelectionComponent): void {
        throw new Error("Method not implemented.");
    }

    public visitText(component: DataDisplayTextComponent): void {
        throw new Error("method not implemented.");
    }

    public visitRadioButton(component: DataDisplayRadioButtonComponent): void {
        throw new Error(
            "TableBuilderCellRadioButtonComponent method not implemented."
        );
    }

    public visitCheckbox(component: DataDisplayCheckboxComponent): void {
        throw new Error(
            "TableBuilderCellCheckboxComponent method not implemented."
        );
    }

    public visitLink(component: DataDisplayLinkComponent): void {
        throw new Error(
            "TableBuilderCellLinkComponent method not implemented."
        );
    }

    public visitButton(component: DataDisplayButtonComponent): void {
        throw new Error(
            "TableBuilderCellButtonComponent method not implemented."
        );
    }

    public visitNumber(component: DataDisplayNumberComponent): void {
        throw new Error(
            "TableBuilderCellNumberComponent method not implemented."
        );
    }

    public visitTextbox(component: DataDisplayTextboxComponent): void {
        throw new Error(
            "TableBuilderCellTextboxComponent method not implemented."
        );
    }

    public visitDateTime(component: DataDisplayDateTimeComponent): void {
        throw new Error(
            "TableBuilderCellDateTimeComponent method not implemented."
        );
    }

    public visitThumbnail(component: DataDisplayThumbnailComponent): void {
        throw new Error(
            "TableBuilderCellThumbnailComponent method not implemented."
        );
    }
}
