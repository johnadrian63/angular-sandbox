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
    cardNumber: string;
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