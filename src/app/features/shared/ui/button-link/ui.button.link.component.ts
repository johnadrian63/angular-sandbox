import {
    Component,
    Input,
    OnInit
} from "@angular/core";
import { NgClass } from "@angular/common";
import { RouterModule } from "@angular/router";

import { Ui } from "../ui.theme";

@Component({
    selector: "app-ui-button-link",
    templateUrl: "./ui.button.link.component.html",
    styleUrls: [
        "../button/ui.button.component.css",
        "./ui.button.link.component.css"
    ],
    imports: [
        RouterModule,
        NgClass
    ]
})
export class UiButtonLinkComponent implements OnInit {
    // FIXME refactor this!
    @Input() public linkClass!: string;
    // FIXME refactor this!
    @Input() public link!: string[];
    @Input() public theme: keyof typeof Ui.Theme = Ui.Theme.DEFAULT;

    public get classes(): string {
        const classes: string[] = [];
        const linkTheme = Ui.buttonClassMapper.get(this.theme);

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
