import { ContextBuilderDataLoader } from "../../context-builder/model/context-builder.data-loader";

// FIXME refactor this
export class FilterBuilderContextDataLoader<T> extends ContextBuilderDataLoader<T | null> {
    public async load(): Promise<T> {
        throw new Error("not sure why this code is like this!");
    }
}
