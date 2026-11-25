import { Component } from "@angular/core";

import { TableBuilderComponent } from "../../../shared/table-builder/table.builder.component";
import { getDemoAppCmsQuoteTableBuilderProviders } from "./table-builder/demo.app.cms.quote.table.builder.providers";

@Component({
    selector: "app-demo-app-cms-quote",
    templateUrl: "./demo.app.cms.quote.html",
    imports: [TableBuilderComponent],
    providers: [
        ...getDemoAppCmsQuoteTableBuilderProviders()
    ]
})
export class DemoAppCmsQuote { }