import { IUser } from "../user/user.model";
import { IPaginationMeta } from "../filter.model";

export interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IReaction;
    views: number;
    userId: number;
}

export interface IPostCollection extends IPaginationMeta {
    posts: IPost[];
}

export interface IReaction {
    likes: number;
    dislikes: number;
}

export interface ICommentAuthor extends Pick<IUser, "id" | "username"> {
    fullName: string;
}

export interface IPostComment {
    id: number;
    postId: number;
    body: string;
    likes: number;
    user: ICommentAuthor;
}

export interface IPostCommentCollection extends IPaginationMeta {
    comments: IPostComment[];
}
