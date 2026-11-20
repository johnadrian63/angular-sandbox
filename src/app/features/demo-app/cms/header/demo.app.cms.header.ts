import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faTableColumns, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-demo-app-cms-header",
    styleUrl: "./demo.app.cms.header.css",
    templateUrl: "./demo.app.cms.header.html",
    imports: [
        FaIconComponent,
        RouterModule
    ],
})
export class DemoAppCmsPostHeader {
    public readonly faTableColumnsIcon: IconDefinition = faTableColumns;
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    public toggle(): void { }
}
