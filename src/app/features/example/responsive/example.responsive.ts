import { Component, ElementRef, inject, Signal, signal, viewChild, WritableSignal } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { faBars, faTableColumns } from "@fortawesome/free-solid-svg-icons";

import { generateRange } from "../../shared/util/range.generator";
import { ExampleResponsiveNavigation } from "./navigation/example.responsive.navigation";
import { EmbedTableBuilderDemo } from "../../embed/table-builder-demo/embed.table.builder.demo";

interface FilterOption {
    value: string;
    label: string;
}

interface CategoryOption extends FilterOption {
    count: number;
}

@Component({
    selector: "app-example-responsive",
    styleUrl: "./example.responsive.css",
    templateUrl: "./example.responsive.html",
    imports: [RouterModule, ExampleResponsiveNavigation, EmbedTableBuilderDemo],
})
export class ExampleResponsive {
    // public readonly faSearchIcon = faSearch;
    public readonly faBarsIcon = faBars;
    public readonly faTableColumnsIcon = faTableColumns;
    public readonly sidebarOpen: WritableSignal<boolean | undefined> = signal<boolean | undefined>(false);
    public readonly navigationOpen = signal<boolean>(false);

    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    private readonly breakpointObserver: BreakpointObserver = inject<BreakpointObserver>(BreakpointObserver);

    public toggleProfileElem: Signal<ElementRef<any> | undefined> = viewChild("toggleProfileIcon", {
        read: ElementRef
    });

    public readonly statuses: FilterOption[] = [
        { value: 'all', label: 'All statuses' },
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
        { value: 'pending', label: 'Pending' }
    ];

    public readonly categories: CategoryOption[] = [
        { value: 'design', label: 'Design', count: 12 },
        { value: 'development', label: 'Development', count: 24 },
        { value: 'marketing', label: 'Marketing', count: 8 },
        { value: 'support', label: 'Support', count: 6 }
    ];

    constructor() {
        this.breakpointObserver.observe([
            Breakpoints.Handset,
            "(max-width: 768px)"
        ]).pipe(
            takeUntilDestroyed()
        ).subscribe((result) => {
            const isMobile = result.matches;

            this.sidebarOpen.set(!isMobile);
        });
    }

    public getRange(range: number): number[] {
        return generateRange(range);
    }

    public toggleSidebar(toggled: boolean | undefined): void {
        this.sidebarOpen.set(toggled);
    }

    public toggleNavigation(): void {
        this.sidebarOpen.set(false);

        this.navigationOpen.update((value: boolean) => !value);
    }

    public closeDropdown(): void {
        this.navigationOpen.set(false);
    }
}
