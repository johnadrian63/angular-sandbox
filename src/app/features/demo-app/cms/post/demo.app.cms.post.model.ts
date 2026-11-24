import { IUser } from "../user/model/user.model";

export interface IPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IReaction;
    views: number;
    userId: number;
}

export interface IPostCollection {
    posts: IPost[];
    limit: number;
    skip: number;
    total: number;
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

export interface IPostCommentsCollection {
    comments: IPostComment[];
    limit: number;
    skip: number;
    total: number;
}