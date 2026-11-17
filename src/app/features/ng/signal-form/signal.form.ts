import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector: "app-signal-form",
    styleUrl: "./signal.form.css",
    templateUrl: "./signal.form.html",
    imports: [RouterOutlet, RouterModule]
})
export class SignalForm { }
