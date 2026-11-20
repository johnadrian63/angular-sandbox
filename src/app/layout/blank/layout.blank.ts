import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Layout } from "../layout";

@Component({
    selector: "app-layout-blank",
    styleUrl: "./layout.blank.css",
    templateUrl: "./layout.blank.html",
    imports: [RouterOutlet],
})
export class LayoutBlank extends Layout { }
