import { inject, Injectable, InputSignal, resource } from "@angular/core";
import { lastValueFrom } from "rxjs";

import { createRegistry } from "../../../shared/util/registry";
import { IPost } from "../../../shared/external-api/dummyjson/model/post/post.model";
import { DummyJsonPostService } from "../../../shared/external-api/dummyjson/dummyjson.post.service";

interface IInputDeps {
    postId: InputSignal<number>;
}

export interface IPostResourceParam {
    postId: number;
}

@Injectable()
export class PocInputServiceBridgePostService {

    public get post(): IPost | undefined {
        return this.postResource.value();
    }

    public get isLoading(): boolean {
        return this.postResource.isLoading();
    }

    private readonly postResource = resource({
        params: () => {
            const deps = this.registry.read();

            if (!deps) {
                return undefined;
            }

            return {
                postId: deps.postId(),
            };
        },
        loader: ({ params }) =>
            this.fetchData(params),
    });

    private readonly registry = createRegistry<IInputDeps>();
    private readonly postService = inject<DummyJsonPostService>(DummyJsonPostService);

    public register(deps: IInputDeps): void {
        this.registry.register(deps);
    }

    private async fetchData(params: IPostResourceParam): Promise<IPost> {
        return await lastValueFrom(this.postService.getPost(params.postId));
    }
}
