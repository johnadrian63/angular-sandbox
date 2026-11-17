import { IPostAdapter } from "./poc.table.builder.model";
import { DataDisplayTextComponent } from "../../shared/data-display/text";
import { ITableBuilderColumnConfig, ITableBuilderColumnHeaderConfig } from "../../shared/table-builder";
import { TableBuilderDataDisplayHeaderComponent } from "../../shared/table-builder/component/data-display/header";

export const pocTableBuilderHeaderMapper: Map<keyof IPostAdapter, ITableBuilderColumnHeaderConfig>
    = new Map<keyof IPostAdapter, ITableBuilderColumnHeaderConfig>([
        [
            "userId",
            {
                label: "User ID",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "title",
            {
                label: "Title",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "body",
            {
                label: "Body",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
    ]);


export const pocTableBuilderMapper: Map<keyof IPostAdapter, ITableBuilderColumnConfig>
    = new Map<keyof IPostAdapter, ITableBuilderColumnConfig>([
        [
            "userId",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "title",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "body",
            {
                renderer: DataDisplayTextComponent
            }
        ],
    ]);