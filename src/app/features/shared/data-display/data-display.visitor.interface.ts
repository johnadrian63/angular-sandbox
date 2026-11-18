import {
    DataDisplayTextComponent,
    DataDisplayRadioButtonComponent,
    DataDisplayCheckboxComponent,
    DataDisplayLinkComponent,
    DataDisplayButtonComponent,
    DataDisplayNumberComponent,
    DataDisplayTextboxComponent,
    DataDisplaySelectionComponent,
    DataDisplayDateTimeComponent,
    DataDisplayThumbnailComponent
} from "../table-builder/component";

export interface IDataDisplayVisitor<T> {
    visitText(component: DataDisplayTextComponent): T;
    visitRadioButton(component: DataDisplayRadioButtonComponent): T;
    visitSelection(component: DataDisplaySelectionComponent): T;
    visitCheckbox(component: DataDisplayCheckboxComponent): T;
    visitLink(component: DataDisplayLinkComponent): T;
    visitButton(component: DataDisplayButtonComponent): T;
    visitNumber(component: DataDisplayNumberComponent): T;
    visitTextbox(component: DataDisplayTextboxComponent): T;
    visitDateTime(component: DataDisplayDateTimeComponent): T;
    visitThumbnail(component: DataDisplayThumbnailComponent): T;
}

export class DataDisplayVisitor<T> implements IDataDisplayVisitor<T> {
    public visitText(component: DataDisplayTextComponent): T {
        throw new Error("Method not implemented");
    }

    public visitRadioButton(component: DataDisplayRadioButtonComponent): T {
        throw new Error("Method not implemented");
    }

    public visitSelection(component: DataDisplaySelectionComponent): T {
        throw new Error("Method not implemented");
    }

    public visitCheckbox(component: DataDisplayCheckboxComponent): T {
        throw new Error("Method not implemented");
    }

    public visitLink(component: DataDisplayLinkComponent): T {
        throw new Error("Method not implemented");
    }

    public visitButton(component: DataDisplayButtonComponent): T {
        throw new Error("Method not implemented");
    }

    public visitNumber(component: DataDisplayNumberComponent): T {
        throw new Error("Method not implemented");
    }

    public visitTextbox(component: DataDisplayTextboxComponent): T {
        throw new Error("Method not implemented");
    }

    public visitDateTime(component: DataDisplayDateTimeComponent): T {
        throw new Error("Method not implemented");
    }

    public visitThumbnail(component: DataDisplayThumbnailComponent): T {
        throw new Error("Method not implemented");
    }
}
