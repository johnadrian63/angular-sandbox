import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector: "app-poc",
    styleUrl: "./poc.css",
    templateUrl: "./poc.html",
    imports: [RouterModule, RouterOutlet],
})
export class Poc {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
}
