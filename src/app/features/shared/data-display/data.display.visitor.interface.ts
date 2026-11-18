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
