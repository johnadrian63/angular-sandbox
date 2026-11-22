import { ITableBuilderRowData } from "../../../shared/table-builder";

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    phone: string;
    email: string;
    username: string;
    birthDate: string;
    bloodGroup: string;
    height: string;
    weight: string;
    eyeColor: string;
    hair: IHair;
    ip: string;
    address: IAddress;
    macAddress: string;
    university: string;
    bank: IBankAccount;
    company: ICompany;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: ICrypto;
    image: string;
    role: string;
}

export interface IHair {
    color: string;
    type: string;
}

export interface IAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: ICoordinate;
    country: string;
}

export interface IBankAccount {
    cardExpire: string;
    carNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

export interface ICompany {
    department: string;
    name: string;
    title: string;
    address: IAddress;
}

export interface ICoordinate {
    lat: number;
    lng: number;
}


export interface ICrypto {
    coin: string;
    wallet: string;
    network: string;
}
export interface IUserCollection {
    users: IUser[];
    limit: number;
    skip: number;
    total: number;
}

export interface IUserAdapter extends ITableBuilderRowData, IUser {
    fullName: string;
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
