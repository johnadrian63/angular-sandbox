
import { IUserAdapter } from "../../demo.app.user.model";
import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
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
            "gender",
            {
                label: "Gender",
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
            "gender",
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
                renderer: DataDisplayTextComponent
            }
        ],
    ]);
