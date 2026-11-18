import { Component } from "@angular/core";

import { EmbedTableBuilderDemo } from "../../embed/table-builder-demo/embed.table.builder.demo";

@Component({
    selector: "app-poc-table-builder",
    styleUrl: "./poc.table.builder.css",
    templateUrl: "./poc.table.builder.html",
    imports: [
        EmbedTableBuilderDemo
    ],
})
export class PocTableBuilder { }
