import { Component } from "@angular/core";

import { PocTableBuilderBasic } from "./basic/poc.table.builder.basic";

@Component({
    selector: "app-poc-table-builder",
    styleUrl: "./poc.table.builder.css",
    templateUrl: "./poc.table.builder.html",
    imports: [
        PocTableBuilderBasic
    ],
})
export class PocTableBuilder { }
