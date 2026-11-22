import { Directive, HostListener, inject } from "@angular/core";

import { SidebarTogglerService } from "./sidebar.toggler.service";

@Directive({
    selector: "[sidebarToggler]"
})
export class SidebarToggler {
    private readonly sidebarToggleService: SidebarTogglerService = inject<SidebarTogglerService>(SidebarTogglerService);

    @HostListener("click", ["$event"]) toggle(event: Event) {
        this.sidebarToggleService.toggle();
    }
}