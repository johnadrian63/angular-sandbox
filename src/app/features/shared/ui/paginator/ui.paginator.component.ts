import {
    Component,
    EventEmitter,
    Input,
    Output,
} from "@angular/core";
import {
    MatPaginatorModule,
    PageEvent
} from "@angular/material/paginator";
import { PageSizeOptions } from "../../data-collator/data.collator.model";

@Component({
    selector: "app-ui-paginator",
    templateUrl: "./ui.paginator.component.html",
    styleUrl: "./ui.paginator.component.css",
    imports: [
        MatPaginatorModule
    ]
})
export class UiPaginatorComponent {
    // FIXME refactor this!
    @Input() public pageSizeOptions!: PageSizeOptions[];

    // FIXME refactor this!
    @Input() public pageIndex!: number;

    // FIXME refactor this!
    @Input() public pageSize!: PageSizeOptions;

    @Input() public count: number = 0;
    @Input() public hidePageSize: boolean = false;
    @Input() public disabled: boolean = false;
    @Input() public showFirstLastButtons: boolean = true;

    @Output() public page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
}
