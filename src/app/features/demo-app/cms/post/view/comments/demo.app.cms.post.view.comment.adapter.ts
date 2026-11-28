import { IDataCollatorRowData } from "../../../../../shared/data-collator";
import { ICommentAuthor, IPostComment } from "../../../../../shared/external-api/dummyjson/model/post/post.model";

export interface IPostCommentAdapter extends IDataCollatorRowData, IPostComment { }

export class PostCommentAdapter implements IPostCommentAdapter {
    public get rowId(): string | number {
        return this.data.id;
    }

    public get id(): number {
        return this.data.id;
    }

    public get postId(): number {
        return this.data.postId;
    }

    public get body(): string {
        return this.data.body;
    }

    public get likes(): number {
        return this.data.likes;
    }

    public get user(): ICommentAuthor {
        return this.data.user;
    }

    constructor(private readonly data: IPostComment) { }
}
