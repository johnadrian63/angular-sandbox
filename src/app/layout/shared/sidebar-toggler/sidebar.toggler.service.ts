import { effect, inject, Service, Signal, signal, WritableSignal } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Service()
export class SidebarTogglerService {

    public get toggled(): Signal<boolean> {
        return this.toggleSignal.asReadonly();
    }

    private readonly toggleSignal: WritableSignal<boolean> = signal<boolean>(true);
    private readonly toggleKey: string = "sidebarTogglerKey";
    private readonly breakpointObserver: BreakpointObserver = inject<BreakpointObserver>(BreakpointObserver);

    constructor() {

        effect(() => {
            this.storeCache(this.toggleSignal());
        });

        this.breakpointObserver.observe([
            Breakpoints.Handset,
            "(max-width: 768px)"
        ]).pipe(
            takeUntilDestroyed()
        ).subscribe((result) => {
            const isMobile = result.matches;

            if (isMobile) {
                this.toggleSignal.set(false);
            } else {
                const toggled = this.getToggledCache();

                this.toggleSignal.set(toggled);
            }
        });
    }

    public toggle(): void {
        this.toggleSignal.update((toggled: boolean) => !toggled);
    }

    private getToggledCache(): boolean {
        const toggledCache = localStorage.getItem(this.toggleKey);

        if (toggledCache !== null) {
            return toggledCache === "true" ? true : false;
        }

        const toggled = this.toggleSignal();

        this.storeCache(toggled);

        return toggled;
    }

    private storeCache(toggled: boolean): void {
        localStorage.setItem(this.toggleKey, toggled.toString());
    }
}