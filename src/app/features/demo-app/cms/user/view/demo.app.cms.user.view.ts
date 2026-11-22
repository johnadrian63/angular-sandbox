import { Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";

import { UserAdapter } from "../demo.app.user.model";
import { DataDisplayTextComponent } from "../../../../shared/data-display/text";
import { DemoAppCmsUserDisplayRole } from "../display/role/demo.app.cms.user.display.role";
import { DataDisplayThumbnailComponent } from "../../../../shared/data-display/thumbnail";

@Component({
    selector: "app-demo-app-cms-user-view",
    templateUrl: "./demo.app.cms.user.view.html",
    imports: [DataDisplayTextComponent, DemoAppCmsUserDisplayRole, DataDisplayThumbnailComponent]
})
export class DemoAppCmsUserView {
    private readonly route: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly data = toSignal(this.route.data, { requireSync: true });
    public readonly user = computed(() => {
        const data = this.data();

        return new UserAdapter(data["user"]);
    });
}
