import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { IMenuItem } from "../navigation.model";
import { NavigationDisplayHandler } from "../navigation.display.handler";
import { NavigationCollapsibleDisplayHandlerVisitor } from "./navigation.collapsible.display.handler";

type StorageCache = { [key: string]: boolean };

@Injectable()
export abstract class NavigationCollapsibleService {
    public readonly menus: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    private readonly storage: StorageCache = {};
    private readonly collapsibleKey: string = "navigationCollapsibleKey";

    constructor() {
        const cache = this.getStorageCache();

        if (!cache) {
            localStorage.setItem(this.collapsibleKey, JSON.stringify(this.storage));
        }
    }

    public handle(vcr: ViewContainerRef, handler: NavigationDisplayHandler, index: number): void {
        const visitor = new NavigationCollapsibleDisplayHandlerVisitor(vcr, index);

        handler.accept(visitor);
    }

    public getToggleCache(key: string): boolean {
        const cache = this.getStorageCache();
        const toggleValue = cache[key];

        return typeof toggleValue === "boolean" ? toggleValue : false;
    }

    public setToggleCache(key: string, toggled: boolean) {
        const cache = this.getStorageCache();

        if (cache) {
            cache[key] = toggled;

            this.setStorageCache(cache);
        }
    }

    private getStorageCache(): StorageCache {
        let storage: StorageCache = {};

        const cache = localStorage.getItem(this.collapsibleKey);

        if (cache) {
            storage = JSON.parse(cache);
        }

        return storage;
    }

    private setStorageCache(value: StorageCache): void {
        localStorage.setItem(this.collapsibleKey, JSON.stringify(value));
    }
}