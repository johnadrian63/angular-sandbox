
import { IPostAdapter } from "../../demo.app.post.model";
import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { ITableBuilderColumnConfig, ITableBuilderColumnHeaderConfig } from "../../../../../shared/table-builder";
import { TableBuilderDataDisplayHeaderComponent } from "../../../../../shared/table-builder/component/data-display/header";

export const demoAppCmsPostListTableBuilderHeaderMapper: Map<keyof IPostAdapter, ITableBuilderColumnHeaderConfig>
    = new Map<keyof IPostAdapter, ITableBuilderColumnHeaderConfig>([
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
        [
            "views",
            {
                label: "Views",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
    ]);

export const demoAppCmsPostListTableBuilderMapper: Map<keyof IPostAdapter, ITableBuilderColumnConfig>
    = new Map<keyof IPostAdapter, ITableBuilderColumnConfig>([
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
        [
            "views",
            {
                renderer: DataDisplayTextComponent
            }
        ],
    ]);
