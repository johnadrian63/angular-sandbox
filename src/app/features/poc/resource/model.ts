import { IPaginationMeta } from "../../demo-app/cms/model/filter.model";

export interface ITodo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

export interface ITodoCollection extends IPaginationMeta {
    todos: ITodo[]
}