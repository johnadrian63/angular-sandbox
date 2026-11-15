import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Layout } from "../layout";

@Component({
    imports: [RouterOutlet],
    selector: "app-layout-blank",
    styleUrl: "./layout.blank.css",
    templateUrl: "./layout.blank.html"
})
export class LayoutBlank extends Layout { }
