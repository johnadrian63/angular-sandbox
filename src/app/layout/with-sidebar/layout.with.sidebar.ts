import { Component, signal, WritableSignal } from "@angular/core";
import { MatProgressBar } from "@angular/material/progress-bar";
import { RouterOutlet } from "@angular/router";

import { Layout } from "../layout";
import { SidebarTogglerPanel } from "../shared/sidebar-toggler/sidebar.toggler.panel.directive";

@Component({
    selector: "app-layout-with-sidebar",
    styleUrl: "./layout.with.sidebar.css",
    templateUrl: "./layout.with.sidebar.html",
    imports: [
        RouterOutlet,
        SidebarTogglerPanel,
        MatProgressBar
    ],
})
export class LayoutWithSidebar extends Layout {
    public readonly sidebarOpen: WritableSignal<boolean | undefined> = signal<boolean | undefined>(false);

    public toggleSidebar(toggled: boolean | undefined): void {
        this.sidebarOpen.set(toggled);
    }
}
