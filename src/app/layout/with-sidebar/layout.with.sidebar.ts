import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Layout } from "../layout";

@Component({
    selector: "app-layout-with-sidebar",
    styleUrl: "./layout.with.sidebar.css",
    templateUrl: "./layout.with.sidebar.html",
    imports: [RouterOutlet],
})
export class LayoutWithSidebar extends Layout { }
