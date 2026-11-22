
import { IUserAdapter } from "../../demo.app.user.model";
import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { DemoAppCmsUserDisplayRole } from "../../display/view/demo.app.cms.user.display.role";
import { ITableBuilderColumnConfig, ITableBuilderColumnHeaderConfig } from "../../../../../shared/table-builder";
import { TableBuilderDataDisplayHeaderComponent } from "../../../../../shared/table-builder/component/data-display/header";

export const demoAppCmsUserListTableBuilderHeaderMapper: Map<keyof IUserAdapter, ITableBuilderColumnHeaderConfig>
    = new Map<keyof IUserAdapter, ITableBuilderColumnHeaderConfig>([
        [
            "firstName",
            {
                label: "First name",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "lastName",
            {
                label: "Last name",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "phone",
            {
                label: "Phone",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "email",
            {
                label: "Email",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "role",
            {
                label: "Role",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
    ]);

export const demoAppCmsUserListTableBuilderMapper: Map<keyof IUserAdapter, ITableBuilderColumnConfig>
    = new Map<keyof IUserAdapter, ITableBuilderColumnConfig>([
        [
            "firstName",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "lastName",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "phone",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "email",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "role",
            {
                renderer: DemoAppCmsUserDisplayRole
            }
        ],
    ]);
