import {
    Component,
    Input,
    OnInit
} from "@angular/core";
import { Subscription } from "rxjs";

import { Ui } from "../ui.theme";

@Component({
    template: ""
})
export abstract class UiButtonAbstractComponent implements OnInit {
    // FIXME refactor this!
    @Input() public icon!: string;
    @Input() public theme: keyof typeof Ui.Theme = Ui.theme.DEFAULT;
    // FIXME refactor this!
    @Input() public busySubscription!: Subscription;
    @Input() public strict: boolean = false;
    // FIXME refactor this!
    @Input() public buttonClass!: string;
    @Input() public disabled: boolean = false;

    public get classes(): string {
        const classes: string[] = [];
        const buttonTheme = Ui.buttonClassMapper.get(this.theme);
        // FIXME refactor this!
        classes.push(buttonTheme!);

        if (this.buttonClass) {
            classes.push(this.buttonClass);
        }

        return classes.join(" ");
    }

    // public get spinnerColor(): LoaderSpinnerColor {
    //     if (this.spinnerColorMapper.has(this.theme) === true) {
    //         return this.spinnerColorMapper.get(this.theme);
    //     }

    //     return LoaderSpinnerColor.WHITE;
    // }

    // private readonly spinnerColorMapper: Map<keyof typeof Ui.Theme, LoaderSpinnerColor> = new Map<keyof typeof Ui.Theme, LoaderSpinnerColor>([
    //     [Ui.Theme.DEFAULT, LoaderSpinnerColor.BLACK],
    //     [Ui.Theme.WHITE, LoaderSpinnerColor.GRAY],
    // ]);

    public ngOnInit(): void {
        if (Ui.Theme[this.theme] === undefined) {
            throw new Error(`${this.theme} theme is not supported`);
        }
    }
}
