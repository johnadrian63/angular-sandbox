import { Component, computed, inject, Signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, Data } from "@angular/router";

import { UserAdapter } from "../demo.app.cms.user.model";
import { DataDisplayTextComponent } from "../../../../shared/data-display/text";
import { DataDisplayLinkComponent } from "../../../../shared/data-display/link";
import { DataDisplayThumbnailComponent } from "../../../../shared/data-display/thumbnail";
import { DemoAppCmsUserDisplayRole } from "../display/role/demo.app.cms.user.display.role";

@Component({
    selector: "app-demo-app-cms-user-view",
    templateUrl: "./demo.app.cms.user.view.html",
    imports: [
        DataDisplayTextComponent,
        DemoAppCmsUserDisplayRole,
        DataDisplayThumbnailComponent,
        DataDisplayLinkComponent
    ]
})
export class DemoAppCmsUserView {
    public readonly user: Signal<UserAdapter> = computed(() => {
        const data = this.data();

        return new UserAdapter(data["user"]);
    });

    private readonly route: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly data: Signal<Data> = toSignal(this.route.data, { requireSync: true });
}
