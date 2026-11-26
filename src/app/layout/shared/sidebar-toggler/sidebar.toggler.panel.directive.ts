import { Directive, effect, ElementRef, inject, input, InputSignal, Renderer2 } from "@angular/core";

import { SidebarTogglerService } from "./sidebar.toggler.service";

@Directive({
    selector: "[sidebarTogglerPanel]"
})
export class SidebarTogglerPanel {
    public readonly showClass: InputSignal<string> = input<string>("");
    public readonly hideClass: InputSignal<string> = input<string>("");

    private readonly elementRef: ElementRef = inject<ElementRef>(ElementRef);
    private readonly renderer: Renderer2 = inject<Renderer2>(Renderer2);
    private readonly sidebarToggleService: SidebarTogglerService = inject<SidebarTogglerService>(SidebarTogglerService);

    constructor() {
        effect(() => {
            let showClass = this.showClass();
            let hideClass = this.hideClass();

            if (!showClass || !hideClass) {
                throw new Error("showClass or hideClass should not be empty.");
            }

            let showingClass = showClass;
            let hidingClass = hideClass;

            const toggled = this.sidebarToggleService.toggled();

            if (!toggled) {
                showingClass = hideClass;
                hidingClass = showClass;
            }

            hidingClass.split(" ").forEach((className) => {
                this.renderer.removeClass(this.elementRef.nativeElement, className);
            });

            showingClass.split(" ").forEach((className: string) => {
                this.renderer.addClass(this.elementRef.nativeElement, className);
            });
        });
    }
}