import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { Component, inject, DOCUMENT, OnInit, WritableSignal, signal } from "@angular/core";
import { NavigationEnd, NavigationStart, Router, RouterModule, RouterOutlet } from "@angular/router";

@Component({
    imports: [RouterModule, RouterOutlet, ReactiveFormsModule],
    selector: "app-root",
    styleUrl: "./app.css",
    templateUrl: "./app.html",
})
export class App implements OnInit {
    public readonly themeControl = new FormControl("light");
    public readonly loading: WritableSignal<boolean> = signal<boolean>(true);
    public readonly router: Router = inject<Router>(Router);

    public ngOnInit(): void {
        this.router
            .events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    this.loading.set(true);
                }

                if (event instanceof NavigationEnd) {
                    this.loading.set(false);
                }
            });
    }
}
