
import { IPostTagAdapter } from "../demo.app.cms.post.tags.adapter";
import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { ITableBuilderColumnConfig, ITableBuilderColumnHeaderConfig } from "../../../../../shared/table-builder";
import { TableBuilderDataDisplayHeaderComponent } from "../../../../../shared/table-builder/component/data-display/header";

export const demoAppCmsPostTagsTableBuilderHeaderMapper: Map<keyof IPostTagAdapter, ITableBuilderColumnHeaderConfig>
    = new Map<keyof IPostTagAdapter, ITableBuilderColumnHeaderConfig>([
        [
            "slug",
            {
                label: "Slug",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "name",
            {
                label: "Name",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "url",
            {
                label: "Url",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
    ]);

export const demoAppCmsPostTagsTableBuilderMapper: Map<keyof IPostTagAdapter, ITableBuilderColumnConfig>
    = new Map<keyof IPostTagAdapter, ITableBuilderColumnConfig>([
        [
            "slug",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "name",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "url",
            {
                renderer: DataDisplayTextComponent
            }
        ],
    ]);
