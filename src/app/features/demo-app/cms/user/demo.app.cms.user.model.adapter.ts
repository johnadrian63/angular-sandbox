import { ITableBuilderRowData } from "../../../shared/table-builder";
import { IAddress, IBankAccount, ICompany, ICrypto, IHair, IUser } from "./model/user.model";

export interface IUserAdapter extends ITableBuilderRowData, IUser {
    fullName: string;
    companyName: string;
}

export class UserAdapter implements IUserAdapter {

    public get rowId(): string | number {
        return this.data.id;
    }

    public get id(): number {
        return this.data.id;
    }

    public get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public get firstName(): string {
        return this.data.firstName;
    }

    public get maidenName(): string {
        return this.data.maidenName;
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

    public get username(): string {
        return this.data.username;
    }

    public get birthDate(): string {
        return this.data.birthDate;
    }

    public get bloodGroup(): string {
        return this.data.bloodGroup;
    }

    public get height(): string {
        return this.data.height;
    }

    public get weight(): string {
        return this.data.height;
    }

    public get eyeColor(): string {
        return this.data.eyeColor;
    }

    public get hair(): IHair {
        return this.data.hair;
    }

    public get hairInfo(): string {
        return `${this.data.hair.color} / ${this.data.hair.type}`;
    }

    public get role(): string {
        return this.data.role;
    }

    public get image(): string {
        return this.data.image;
    }

    public get ip(): string {
        return this.data.ip;
    }

    public get address(): IAddress {
        return this.data.address;
    }

    public get macAddress(): string {
        return this.data.macAddress;
    }

    public get university(): string {
        return this.data.university;
    }

    public get bank(): IBankAccount {
        return this.data.bank;
    }

    public get company(): ICompany {
        return this.data.company;
    }

    public get companyName(): string {
        return this.data.company.name;
    }

    public get ein(): string {
        return this.data.ein;
    }

    public get ssn(): string {
        return this.data.ssn;
    }

    public get userAgent(): string {
        return this.data.userAgent;
    }

    public get crypto(): ICrypto {
        return this.data.crypto;
    }

    constructor(
        private readonly data: IUser
    ) { }
}
