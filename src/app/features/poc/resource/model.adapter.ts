
import { ITodo } from "./model";

export interface ITodoCollection {
    limit: number;
    skip: number;
    todos: ITodo[]
    total: number;
}

export interface ITodoAdapter extends ITodo { }

export class TodoAdapter implements ITodoAdapter {

    public get id(): number {
        return this.data.id;
    }

    public get todo(): string {
        return this.data.todo;
    }

    public get completed(): boolean {
        return this.data.completed;
    }

    public get userId(): number {
        return this.data.userId;
    }

    constructor(private readonly data: ITodoAdapter) { }
}