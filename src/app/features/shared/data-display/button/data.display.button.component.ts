import {
    Component,
    EventEmitter,
    HostListener,
    model,
    ModelSignal,
    Output
} from "@angular/core";

import { Ui } from "../../ui/ui.theme";
import { IDataDisplayVisitor } from "../data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data.display.abstract.component";
import { UiButtonLinkComponent } from "../../ui/button-link/ui.button.link.component";

@Component({
    selector: "app-data-display-button",
    templateUrl: "./data.display.button.component.html",
    imports: [
        UiButtonLinkComponent,
    ]
})
export class DataDisplayButtonComponent extends DataDisplayAbstractComponent {
    public readonly text: ModelSignal<string> = model<string>("");
    public readonly className: ModelSignal<string> = model<string>("");
    public readonly theme: ModelSignal<keyof typeof Ui.Theme> = model<keyof typeof Ui.Theme>(Ui.Theme.DEFAULT);

    // FIXME refactor this and align with model()
    @Output() public handleClick: EventEmitter<Event> = new EventEmitter<Event>();

    @HostListener("click", ["$event"]) onClick(event: Event) {
        this.handleClick.emit(event);

        event.stopPropagation();
    }

    public accept<T>(visitor: IDataDisplayVisitor<T>): T {
        return visitor.visitButton(this);
    }
}
