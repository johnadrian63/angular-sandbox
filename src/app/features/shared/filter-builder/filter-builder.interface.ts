import {
    Provider,
    Type,
    WritableSignal
} from "@angular/core";

// FIXME refactor this! Why is this empty????
export interface IFilterBuilderVisitor { }

export interface IFilterBuilderComponent {
    label: WritableSignal<string>;
    classList: string;
    loadData(): Promise<void>;
    handleAttach(): void;
    handleDetach(): void;
    accept(visitor: IFilterBuilderVisitor): void;
}

export interface IFilterBuilderLoader {
    label: string;
    selected: boolean;
    component: Promise<Type<IFilterBuilderComponent>>;
    providers?: Provider[];
}

export interface IFilterBuilderData { }
