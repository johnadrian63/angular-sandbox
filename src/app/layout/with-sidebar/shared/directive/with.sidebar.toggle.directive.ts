import { Directive, HostListener, inject } from "@angular/core";

import { SidebarToggleService } from "./with.sidebar.toggle.service";

@Directive({
    selector: "[withSidebarToggle]"
})
export class WithSidebarToggle {
    private readonly sidebarToggleService: SidebarToggleService = inject<SidebarToggleService>(SidebarToggleService);

    @HostListener("click", ["$event"]) toggle(event: Event) {
        this.sidebarToggleService.toggle();
    }
}