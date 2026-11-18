import { IUserAdapter } from "../../poc.table.builder.model";
import { DataDisplayTextComponent } from "../../../../shared/data-display/text";
import { DataDisplayThumbnailComponent } from "../../../../shared/data-display/thumbnail";
import { ITableBuilderColumnConfig, ITableBuilderColumnHeaderConfig } from "../../../../shared/table-builder";
import { TableBuilderDataDisplayHeaderComponent } from "../../../../shared/table-builder/component/data-display/header";

export const pocTableBuilderHeaderMapper: Map<keyof IUserAdapter, ITableBuilderColumnHeaderConfig>
    = new Map<keyof IUserAdapter, ITableBuilderColumnHeaderConfig>([
        [
            "id",
            {
                label: "User ID",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
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
            "age",
            {
                label: "Age",
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
            "image",
            {
                label: "Image",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
    ]);


export const pocTableBuilderMapper: Map<keyof IUserAdapter, ITableBuilderColumnConfig>
    = new Map<keyof IUserAdapter, ITableBuilderColumnConfig>([
        [
            "id",
            {
                renderer: DataDisplayTextComponent
            }
        ],
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
            "age",
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
            "image",
            {
                renderer: DataDisplayThumbnailComponent
            }
        ],
    ]);