import { effect, Service, Signal, signal, WritableSignal } from "@angular/core";

@Service()
export class SidebarToggleService {

    public get toggled(): Signal<boolean> {
        return this.toggleSignal.asReadonly();
    }

    private readonly toggleSignal: WritableSignal<boolean> = signal<boolean>(true);
    private readonly sidebarToggleKey: string = "sidebarToggleKey";

    constructor() {
        const toggled = this.getToggledCache();

        this.toggleSignal.set(toggled);

        effect(() => {
            this.storeCache(this.toggleSignal());
        });
    }

    public toggle(): void {
        this.toggleSignal.update((toggled: boolean) => !toggled);
    }

    private getToggledCache(): boolean {
        const toggledCache = localStorage.getItem(this.sidebarToggleKey);

        if (toggledCache !== null) {
            return toggledCache === "true" ? true : false;
        }

        const toggled = this.toggleSignal();

        this.storeCache(toggled);

        return toggled;
    }

    private storeCache(toggled: boolean): void {
        localStorage.setItem(this.sidebarToggleKey, toggled.toString());
    }
}