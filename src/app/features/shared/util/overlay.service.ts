import { DOCUMENT, inject, Service } from "@angular/core";

@Service()
export class OverlayService {
    private readonly document = inject(DOCUMENT);

    public create(): HTMLElement {
        const overlay = this.document.createElement("div");

        overlay.classList.add(
            "w-full",
            "h-full",
            "bg-black",
            "opacity-35",
            "fixed",
            "top-0",
            "left-0",
            "z-50"
        );

        this.document.body.appendChild(overlay);

        return overlay;
    }

    public remove(overlay: HTMLElement): void {
        overlay.remove();
    }
}