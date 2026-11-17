import { ITableBuilderRowData } from "../../shared/table-builder";

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IPostAdapter extends ITableBuilderRowData, IPost { }


export class PostAdapter implements IPostAdapter {

    public get rowId(): string | number {
        return this.post.id;
    }

    public get userId(): number {
        return this.post.userId;
    }

    public get id(): number {
        return this.post.id;
    }

    public get title(): string {
        return this.post.title;
    }

    public get body(): string {
        return this.post.body;
    }

    constructor(
        private readonly post: IPost
    ) { }
}
