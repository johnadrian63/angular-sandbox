import { ComponentType } from "@angular/cdk/portal";
import {
    Provider,
    StaticProvider,
    TemplateRef
} from "@angular/core";
import { Observable } from "rxjs";

export interface IModalBuilderConfig<T = any> {
    data?: T,
    height?: string;
    width?: string;
    minHeight?: string;
    maxHeight?: string;
    minWidth?: string;
    maxWidth?: string;
    focus?: boolean;
    providers?: Array<Provider | StaticProvider>;
}

export interface IModalBuilderHandlerRef {
    close(): void;
    onAfterOpened(): Observable<void>;
    onBeforeClosed(): Observable<void>;
    onAfterClosed(): Observable<void>;
}

export abstract class ModalBuilderHandlerRef implements IModalBuilderHandlerRef {
    public abstract close(): void;
    public abstract onAfterOpened(): Observable<void>;
    public abstract onBeforeClosed(): Observable<void>;
    public abstract onAfterClosed(): Observable<void>;
}

export type ModalBuilderRenderer<T> = ComponentType<T> | TemplateRef<T>;

export interface IModalBuilderHandlerService {
    open<T>(renderer: ModalBuilderRenderer<T>, config: IModalBuilderConfig): IModalBuilderHandlerRef;
}
