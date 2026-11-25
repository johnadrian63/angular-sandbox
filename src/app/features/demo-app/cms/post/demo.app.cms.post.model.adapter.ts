import { IPost, IReaction } from "./model/post.model";
import { ITableBuilderRowData } from "../../../shared/table-builder";

export interface IPostAdapter extends ITableBuilderRowData, IPost { }

export class PostAdapter implements IPostAdapter {

    public get rowId(): string | number {
        return this.data.id;
    }

    public get id(): number {
        return this.data.id;
    }
    public get title(): string {
        return this.data.title;
    }

    public get body(): string {
        return this.data.body;
    }

    public get tags(): string[] {
        return this.data.tags;
    }

    public get reactions(): IReaction {
        return this.data.reactions;
    }

    public get views(): number {
        return this.data.views;
    }

    public get userId(): number {
        return this.data.userId;
    }

    constructor(
        private readonly data: IPost
    ) { }
}
