import { Type, ViewContainerRef } from "@angular/core";

import { NavigationDisplayHandler } from "./navigation.display.handler";

export type IMenuItemTarget = "_blank" | "_self" | "_parent" | "_top";

export interface IMenuItem {
    label: string;
    text: string;
    path?: string | string[];
    target?: IMenuItemTarget;
    children?: IMenuItem[];
    handler?: Type<NavigationDisplayHandler>;
}

export interface IMenu {
    parent?: IMenuItem;
    children: IMenuItem[];
}


export interface INavigationHandlerService {
    handle(vcr: ViewContainerRef, handler: NavigationDisplayHandler): void;
}