
import { IPostAdapter } from "../../demo.app.post.model";
import { DataDisplayTextComponent } from "../../../../../shared/data-display/text";
import { DemoAppCmsPostDisplayTags } from "../../display/tags/demo.app.cms.post.display.tags";
import { DemoAppCmsPostDisplayView } from "../../display/view/demo.app.cms.post.display.view";
import { DemoAppCmsPostDisplayReaction } from "../../display/reaction/demo.app.cms.post.display.reaction";
import { ITableBuilderColumnConfig, ITableBuilderColumnHeaderConfig } from "../../../../../shared/table-builder";
import { DemoAppCmsPostDisplayTextPreview } from "../../display/text-preview/demo.app.cms.post.display.text.preview";
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
            "reactions",
            {
                label: "Reactions",
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
        [
            "tags",
            {
                label: "Tags",
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
                renderer: DemoAppCmsPostDisplayTextPreview
            }
        ],
        [
            "reactions",
            {
                renderer: DemoAppCmsPostDisplayReaction
            }
        ],
        [
            "views",
            {
                renderer: DemoAppCmsPostDisplayView
            }
        ],
        [
            "tags",
            {
                renderer: DemoAppCmsPostDisplayTags
            }
        ],
    ]);
