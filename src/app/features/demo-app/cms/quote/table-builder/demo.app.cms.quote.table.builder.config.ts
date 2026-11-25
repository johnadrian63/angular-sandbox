
import { IQuoteAdapter } from "../demo.app.cms.quote.adapter";
import { DataDisplayTextComponent } from "../../../../shared/data-display/text";
import { ITableBuilderColumnConfig, ITableBuilderColumnHeaderConfig } from "../../../../shared/table-builder";
import { TableBuilderDataDisplayHeaderComponent } from "../../../../shared/table-builder/component/data-display/header";

export const demoAppCmsQuoteTableBuilderHeaderMapper: Map<keyof IQuoteAdapter, ITableBuilderColumnHeaderConfig>
    = new Map<keyof IQuoteAdapter, ITableBuilderColumnHeaderConfig>([
        [
            "quote",
            {
                label: "Quote",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
        [
            "author",
            {
                label: "Author",
                renderer: TableBuilderDataDisplayHeaderComponent
            }
        ],
    ]);

export const demoAppCmsQuoteTableBuilderMapper: Map<keyof IQuoteAdapter, ITableBuilderColumnConfig>
    = new Map<keyof IQuoteAdapter, ITableBuilderColumnConfig>([
        [
            "quote",
            {
                renderer: DataDisplayTextComponent
            }
        ],
        [
            "author",
            {
                renderer: DataDisplayTextComponent
            }
        ],
    ]);
