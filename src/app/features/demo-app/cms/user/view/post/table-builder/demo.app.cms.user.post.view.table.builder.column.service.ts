import { Injectable, ViewContainerRef } from "@angular/core";

import { IPostAdapter } from "../../../../post/demo.app.cms.post.model.adapter";
import { TableBuilderColumnService, } from "../../../../../../shared/table-builder";
import { DataDisplayLinkComponent } from "../../../../../../shared/data-display/link";
import { demoAppCmsPostListTableBuilderMapper } from "../../../../post/list/table-builder/demo.app.cms.post.list.table.builder.config";
import { DemoAppCmsPostListTableBuilderColumnDataVisitor } from "../../../../post/list/table-builder/demo.app.cms.post.list.table.builder.column.service";

@Injectable()
export class DemoAppCmsUserPostViewTableBuilderColumnService extends TableBuilderColumnService {
    public handle(vcr: ViewContainerRef, columnKey: keyof IPostAdapter, row: IPostAdapter): void {
        const mapper = demoAppCmsPostListTableBuilderMapper.get(columnKey);

        this.render(
            vcr,
            mapper!,
            new DemoAppCmsUserPostViewTableBuilderColumnDataVisitor(
                columnKey,
                row
            )
        );
    }
}

class DemoAppCmsUserPostViewTableBuilderColumnDataVisitor extends DemoAppCmsPostListTableBuilderColumnDataVisitor {
    public override visitLink(component: DataDisplayLinkComponent): void {
        const value = <string>this.row[this.columnKey];

        component.url.set(`../../../posts/view/${this.row.id}`);
        component.returnUrlEnabled.set(true);
        component.text.set(value);
    }
}