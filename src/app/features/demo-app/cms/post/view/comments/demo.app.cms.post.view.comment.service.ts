import { inject, Injectable, InputSignal, resource, ResourceRef } from "@angular/core";
import { lastValueFrom } from "rxjs";

import { createRegistry } from "../../../../../shared/util/registry";
import { IPageOptions } from "../../../../../shared/external-api/dummyjson/model/filter.model";
import { IPostCommentAdapter, PostCommentAdapter } from "./demo.app.cms.post.view.comment.adapter";
import { DemoAppCmsPostViewPaginationService } from "./demo.app.cms.post.view.comment.pagination.service";
import { DataCollatorService } from "../../../../../shared/data-collator/migration/data.collator.service";
import { DummyJsonPostService } from "../../../../../shared/external-api/dummyjson/dummyjson.post.service";

interface IInputDeps {
    postId: InputSignal<number>;
}

interface IPOstCommentResourceParam {
    postId: number;
    pageOptions: IPageOptions;
}

@Injectable()
export class DemoAppCmsPostViewCommentService extends DataCollatorService<IPostCommentAdapter[]> {
    protected override resource: ResourceRef<IPostCommentAdapter[] | undefined> = resource({
        params: () => {
            const inputDeps = this.registry.read();

            if (!inputDeps) {
                return undefined;
            }

            return {
                postId: inputDeps.postId(),
                pageOptions: {
                    skip: this.paginationService.page,
                    limit: this.paginationService.pageSize,
                },
            } satisfies IPOstCommentResourceParam;

        },
        loader: ({ params, abortSignal }) => this.fetchData(params, abortSignal)
    });

    private readonly postService: DummyJsonPostService = inject<DummyJsonPostService>(DummyJsonPostService);
    private readonly paginationService: DemoAppCmsPostViewPaginationService = inject<DemoAppCmsPostViewPaginationService>(DemoAppCmsPostViewPaginationService);
    private readonly registry = createRegistry<IInputDeps>();

    private async fetchData(params: IPOstCommentResourceParam, abortSignal: AbortSignal): Promise<IPostCommentAdapter[]> {
        const pageOptions = params.pageOptions;
        const request = this.postService.getComments(params.postId, {
            ...params.pageOptions,
            skip: pageOptions.limit! * pageOptions.skip!
        });
        const result = await lastValueFrom(request);

        this.paginationService.setCount(result.total);

        const comments: IPostCommentAdapter[] = [];

        for (let comment of result.comments) {
            comments.push(new PostCommentAdapter(comment));
        }

        return comments;
    }

    public registerSignalDeps(deps: IInputDeps): void {
        this.registry.register(deps);
    }

    public reset(): void {
        // cleanup logic
    }
}
