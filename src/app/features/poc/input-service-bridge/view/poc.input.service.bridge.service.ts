import { Injectable, InputSignal, resource } from "@angular/core";

import { createRegistry } from "../../../shared/util/registry";

export interface IPocDependencies {
    userId: InputSignal<number>,
    postId: InputSignal<number>,
}

@Injectable()
export class PocResourceInputServiceBridgeService {
    private readonly dependencies = createRegistry<IPocDependencies>();

    public register(dependencies: IPocDependencies): void {
        this.dependencies.register(dependencies);
    }

    private readonly resource = resource({
        params: () => {
            const deps = this.dependencies.read();

            if (deps) {
                return {
                    userId: deps.userId(),
                    postId: deps.postId(),
                };
            }
            return undefined;
        },
        loader: ({ params }) => this.fetchData(params)
    });

    public async fetchData(params: { userId: number, postId: number }): Promise<void> {
        console.log("fetchData using: ", params);
    }
}
