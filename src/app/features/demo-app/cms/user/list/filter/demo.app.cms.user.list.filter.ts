import { Component, DestroyRef, inject, OnInit, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { generateRange } from "../../../../../shared/util/range.generator";

interface IUserFilter {
    role: string;
    gender: string;
    eyeColor: string;
    age: string;
}


@Component({
    selector: "app-demo-app-user-list-filter",
    templateUrl: "./demo.app.cms.user.list.filter.html",
    imports: [FormsModule]
})
export class DemoAppCmsUserListFilter implements OnInit {
    public readonly defaultValues: IUserFilter = {
        role: "",
        gender: "",
        eyeColor: "",
        age: ""
    };
    public readonly filterModel = signal<IUserFilter>(this.defaultValues);
    private readonly activatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly router = inject<Router>(Router);
    private readonly destroyRef: DestroyRef = inject<DestroyRef>(DestroyRef);

    public ngOnInit(): void {

        this.activatedRoute.queryParams
            .pipe(
                takeUntilDestroyed(this.destroyRef)
            ).subscribe((params: Params) => {
                this.setFilterModel(params["key"], params["value"]);
            });
    }

    public getAgeValues(): number[] {
        return generateRange(100);
    }

    public selectFilter(filterKey: string, value: string): void {
        this.router.navigate([], {
            queryParams: {
                key: filterKey,
                value,
                page: 0
            },
            queryParamsHandling: "merge",
            relativeTo: this.activatedRoute
        });
    }

    public setFilterModel(filterKey: string, value: string): void {
        const filterValues: IUserFilter = { ...this.defaultValues };

        Object.keys(this.defaultValues)
            .reduce<IUserFilter>((acc: IUserFilter, key) => {
                if (filterKey !== key) {
                    acc[key as keyof IUserFilter] = "";
                } else {
                    acc[filterKey as keyof IUserFilter] = value;
                }

                return acc;
            }, filterValues);

        this.filterModel.set(filterValues);
    }
}
