import { Component, effect, model, ModelSignal } from "@angular/core";

import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { IDataDisplayVisitor } from "../../../../../shared/data-display/data.display.visitor.interface";
import { DataDisplayAbstractComponent } from "../../../../../shared/data-display/data.display.abstract.component";

@Component({
    selector: "app-demo-app-cms-user-display-role",
    templateUrl: "./demo.app.cms.user.display.role.html",
    imports: [DataDisplayTextComponent]
})
export class DemoAppCmsUserDisplayRole extends DataDisplayAbstractComponent {
    public readonly role: ModelSignal<string> = model.required<string>();
    private readonly roleColorMapper = new Map<string, string>([
        ["admin", "bg-red-400",],
        ["user", "bg-blue-400"],
        ["moderator", "bg-orange-400"],
    ]);

    constructor() {
        super();

        effect(() => {
            const role = this.role();
            const roleColor = this.roleColorMapper.get(role);

            if (roleColor) {
                this.classes += `capitalize block rounded-3xl text-xs p-2 ${roleColor}`;
            }
        })
    }

    public override accept<T>(visitor: IDemoAppCmsUserDisplayRoleVisitor<T>): T {
        return visitor.visitRole(this);
    }
}

export interface IDemoAppCmsUserDisplayRoleVisitor<T> extends IDataDisplayVisitor<T> {
    visitRole(component: DemoAppCmsUserDisplayRole): T;
}
