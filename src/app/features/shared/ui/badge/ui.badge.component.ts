import {
    Component,
    Input,
    OnInit,
} from "@angular/core";

import { Ui } from "../ui.theme";

@Component({
    selector: "app-ui-badge",
    templateUrl: "./ui.badge.component.html"
})
export class UiBadgeComponent implements OnInit {
    // FIXME refactor this!
    @Input() public theme!: keyof typeof Ui.Theme;
    // FIXME refactor this!
    @Input() public badgeClass!: string;

    public get classes(): string {
        const classes: string[] = [];

        const badgeTheme = Ui.badgeClassMapper.get(this.theme);

        // FIXME refactor this!
        classes.push(badgeTheme!);

        if (this.badgeClass) {
            classes.push(this.badgeClass);
        }

        return classes.join(" ");
    }

    public ngOnInit(): void {
        if (Ui.Theme[this.theme] === undefined) {
            throw new Error(`${this.theme} is not supported`);
        }
    }
}
