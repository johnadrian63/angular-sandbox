import { inject, Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";

import { TableBuilderService } from "../../../../../shared/table-builder";
import { IPostTagAdapter, PostTagAdapter } from "../demo.app.cms.post.tags.adapter";
import { DummyJsonPostService } from "../../../../../shared/external-api/dummyjson/dummyjson.post.service";
import { DemoAppCmsPostTagsTableBuilderPaginationService } from "./demo.app.cms.post.tags.table.builder.pagination.service";

@Injectable()
export class DemoAppCmsPostTagsTableBuilderService extends TableBuilderService {
    private readonly postService: DummyJsonPostService = inject<DummyJsonPostService>(DummyJsonPostService);
    private readonly tableBuilderPaginationService: DemoAppCmsPostTagsTableBuilderPaginationService = inject<DemoAppCmsPostTagsTableBuilderPaginationService>(DemoAppCmsPostTagsTableBuilderPaginationService);

    public override init(): void {
        // initialize logic here
    }

    public override async getData(): Promise<IPostTagAdapter[]> {
        try {
            this.setLoading(true);

            const request = this.postService.getPostTags();
            const result = await lastValueFrom(request);

            this.tableBuilderPaginationService.setCount(result.length);

            const tags: IPostTagAdapter[] = [];

            for (let tag of result) {
                tags.push(new PostTagAdapter(tag));
            }

            return tags;
        } catch (error) {
            console.error("error", error);
            return []
        } finally {
            this.setLoading(false);
        }
    }

    public override reset(): void {
        // cleanup logic here
    }
}
