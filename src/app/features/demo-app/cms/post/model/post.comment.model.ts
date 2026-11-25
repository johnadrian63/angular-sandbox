import { IPost } from "./post.model";
import { IUser } from "../../user/model/user.model";
import { IPaginationMeta } from "../../model/filter.model";

export interface IUserComment extends Pick<IUser, "id" | "username"> {
    fullName: string;
}

export interface IPostComment {
    id: number;
    postId: number;
    body: string;
    likes: number;
    user: IUserComment;
}

export interface IPostCommentsCollection extends IPaginationMeta {
    comments: IPost[];
}