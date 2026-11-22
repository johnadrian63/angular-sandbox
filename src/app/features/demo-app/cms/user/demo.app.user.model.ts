import { ITableBuilderRowData } from "../../../shared/table-builder";

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    phone: string;
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
        return this.data.id;
    }

    public get id(): number {
        return this.data.id;
    }

    public get firstName(): string {
        return this.data.firstName;
    }

    public get lastName(): string {
        return this.data.lastName;
    }

    public get age(): number {
        return this.data.age;
    }

    public get gender(): string {
        return this.data.gender;
    }

    public get phone(): string {
        return this.data.phone;
    }

    public get email(): string {
        return this.data.email;
    }

    public get role(): string {
        return this.data.role;
    }

    public get image(): string {
        return this.data.image;
    }

    constructor(
        private readonly data: IUser
    ) { }
}
