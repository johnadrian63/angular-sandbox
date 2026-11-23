import { IUserAdapter } from "../../demo.app.cms.user.model";
import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { DemoAppCmsUserDisplayRole } from "../../display/role/demo.app.cms.user.display.role";
import { DemoAppCmsUserDisplayFullName } from "../../display/full-name/demo.app.cms.user.display.full.name";
import { ITableBuilderColumnConfig, ITableBuilderColumnHeaderConfig } from "../../../../../shared/table-builder";
import { TableBuilderDataDisplayHeaderComponent } from "../../../../../shared/table-builder/component/data-display/header";

export const demoAppCmsUserListTableBuilderHeaderMapper: Map<keyof IUserAdapter, ITableBuilderColumnHeaderConfig>
    = new Map<keyof IUserAdapter, ITableBuilderColumnHeaderConfig>([
        [
            "firstName",
            {
                label: "Full name",
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
        [
            "age",
            {
                label: "Age",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "maidenName",
            {
                label: "Maiden name",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "height",
            {
                label: "Height",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "weight",
            {
                label: "Weight",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "eyeColor",
            {
                label: "Eye Color",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "birthDate",
            {
                label: "Birth date",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "username",
            {
                label: "Username",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "university",
            {
                label: "University",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "companyName",
            {
                label: "Company name",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
    ]);

export const demoAppCmsUserListTableBuilderMapper: Map<keyof IUserAdapter, ITableBuilderColumnConfig>
    = new Map<keyof IUserAdapter, ITableBuilderColumnConfig>([
        [
            "firstName",
            {
                renderer: DemoAppCmsUserDisplayFullName
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
        [
            "age",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "maidenName",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "height",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "weight",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "eyeColor",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "birthDate",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "username",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "university",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "companyName",
            {
                renderer: DataDisplayTextComponent
            }
        ],
    ]);
