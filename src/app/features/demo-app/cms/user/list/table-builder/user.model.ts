import { ITableBuilderRowData } from "../../../../../shared/table-builder";

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;
    image: string;
    role: string;
}

export interface IUserCollection {
    users: IUser[];
    limit: number;
    skip: number;
    total: number;
}

export interface IUserAdapter extends ITableBuilderRowData, IUser { }

export class UserAdapter implements IUserAdapter {

    public get rowId(): string | number {
        return this.user.id;
    }

    public get id(): number {
        return this.user.id;
    }

    public get firstName(): string {
        return this.user.firstName;
    }

    public get lastName(): string {
        return this.user.lastName;
    }

    public get age(): number {
        return this.user.age;
    }

    public get gender(): string {
        return this.user.gender;
    }

    public get email(): string {
        return this.user.email;
    }

    public get role(): string {
        return this.user.role;
    }

    public get image(): string {
        return this.user.image;
    }

    constructor(
        private readonly user: IUser
    ) { }
}
