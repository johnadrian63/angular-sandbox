import { Component, computed, effect, inject, model, ModelSignal, signal, WritableSignal } from "@angular/core";
import { RouterLink, RouterLinkActive, ActivatedRoute, Params, Router } from "@angular/router";
import { NgClass, NgTemplateOutlet } from "@angular/common";

import { IDataDisplayVisitor } from "../data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../data.display.abstract.component";

@Component({
    selector: "app-data-display-link",
    templateUrl: "./data.display.link.component.html",
    imports: [
        RouterLink,
        RouterLinkActive,
        NgClass,
        NgTemplateOutlet
    ]
})
export class DataDisplayLinkComponent extends DataDisplayAbstractComponent {

    public get isExternal(): boolean {
        const path = this.url();

        return !!path && typeof path === "string" && /^https?:\/\//i.test(path);
    }

    public get queryParams(): Params {
        return this.activatedRoute.snapshot.queryParams;
    }

    public readonly text: ModelSignal<string> = model<string>("");
    public readonly url: ModelSignal<string> = model<string>("");
    public readonly redirectUrl = computed(() => {
        return `${this.url()}${this.returnUrl()}`;
    });

    public readonly returnUrlEnabled: ModelSignal<boolean> = model<boolean>(false);
    public readonly target = model<string>("_self");
    public readonly activeClass: ModelSignal<string> = model<string>("underline");

    public override classes: string = "hover:underline";

    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly router: Router = inject<Router>(Router);
    private readonly returnUrl: WritableSignal<string> = signal<string>("");

    constructor() {
        super();

        effect(() => {
            const returnUrlEnabled = this.returnUrlEnabled();

            if (returnUrlEnabled) {
                const returnUrl = this.router.serializeUrl(
                    this.router.createUrlTree([], { queryParams: this.queryParams })
                );

                this.returnUrl.set(returnUrl);
            }
        });
    }

    public override accept<T>(visitor: IDataDisplayVisitor<T>): T {
        return visitor.visitLink(this);
    }
}
