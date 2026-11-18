import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector: "app-demo-app",
    styleUrl: "./demo.app.css",
    templateUrl: "./demo.app.html",
    imports: [RouterOutlet, RouterModule],
})
export class DemoApp {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

}
