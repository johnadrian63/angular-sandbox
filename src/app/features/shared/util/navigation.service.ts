import { Service, inject } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Location } from "@angular/common";
import { filter } from "rxjs/operators";

@Service()
export class NavigationService {
    private history: string[] = [];
    private router = inject(Router);
    private location = inject(Location);

    constructor() {
        this.router.events
            .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
            .subscribe((event) => {
                this.history.push(event.urlAfterRedirects);
            });
    }

    public back(): void {
        this.history.pop();
        if (this.history.length > 0) {
            this.location.back();
        } else {
            this.router.navigateByUrl("/"); // Fallback route
        }
    }
}
