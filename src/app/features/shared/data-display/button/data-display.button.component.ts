import {
    Component,
    EventEmitter,
    HostListener,
    Input,
    Output
} from "@angular/core";

import { Ui } from "../../ui/ui.theme";
import { IDataDisplayVisitor } from "../data-display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data-display.abstract.component";
import { UiButtonLinkComponent } from "../../ui/button-link/ui.button.link.component";

@Component({
    selector: "app-data-display-button-component",
    templateUrl: "./data-display.button.component.html",
    styleUrl: "./data-display.button.component.scss",
    imports: [
        UiButtonLinkComponent
    ]
})
export class DataDisplayButtonComponent extends DataDisplayAbstractComponent {
    // FIXME refactor this!
    @Input() public text!: string;

    // FIXME refactor this!
    @Input() public className!: string;
    @Input() public theme: keyof typeof Ui.Theme = Ui.Theme.DEFAULT;

    @Output() public handleClick: EventEmitter<Event> = new EventEmitter<Event>();

    @HostListener("click", ["$event"]) onClick(event: Event) {
        this.handleClick.emit(event);

        event.stopPropagation();
    }

    public accept<T>(visitor: IDataDisplayVisitor<T>): T {
        if (visitor.visitButton) {
            return visitor.visitButton(this);
        }

        throw new Error("refactor this visitor.visitButton!");
    }
}
