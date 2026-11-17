import {
    Component,
    Input,
    OnInit
} from "@angular/core";
import { RouterModule } from "@angular/router";

import { Ui } from "../ui.theme";

@Component({
    selector: "app-ui-link",
    templateUrl: "./ui.link.component.html",
    styleUrl: "./ui.link.component.scss",
    imports: [
        RouterModule
    ]
})
export class UiLinkComponent implements OnInit {
    // FIXME refactor this!
    @Input() public linkClass!: string;
    @Input() public activeClass: string = "";
    // FIXME refactor this!
    @Input() public link!: string[];
    @Input() public theme: keyof typeof Ui.Theme = Ui.Theme.DEFAULT;

    public get classes(): string {
        const classes: string[] = [];
        const linkTheme = Ui.linkClassMapper.get(this.theme);

        // FIXME refactor this!
        classes.push(linkTheme!);

        if (this.linkClass) {
            classes.push(this.linkClass);
        }

        return classes.join(" ");
    }

    public ngOnInit(): void {
        if (!Ui.Theme[this.theme]) {
            throw new Error(`${this.theme} is not supported`);
        }
    }
}
