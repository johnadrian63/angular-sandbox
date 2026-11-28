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

/**
 * @deprecated please consolidate this into one enum
 */
export enum PageSizeOptions {
    SIZE_1 = 1, // for testing small records only
    SIZE_25 = 25,
    SIZE_50 = 50,
    SIZE_100 = 100,
    SIZE_250 = 250
}

@Component({
    selector: "app-ui-paginator",
    templateUrl: "./ui.paginator.component.html",
    imports: [
        MatPaginatorModule
    ]
})
export class UiPaginatorComponent {
    // FIXME refactor this! convert to input() signal
    @Input() public pageSizeOptions!: PageSizeOptions[];

    // FIXME refactor this! convert to input() signal
    @Input() public pageIndex!: number;

    // FIXME refactor this! convert to input() signal
    @Input() public pageSize!: PageSizeOptions;

    // FIXME refactor this! convert to input() signal
    @Input() public count: number = 0;
    // FIXME refactor this! convert to input() signal
    @Input() public hidePageSize: boolean = false;
    // FIXME refactor this! convert to input() signal
    @Input() public disabled: boolean = false;
    // FIXME refactor this! convert to input() signal
    @Input() public showFirstLastButtons: boolean = true;

    // FIXME refactor this! convert to output() signal
    @Output() public page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
}
