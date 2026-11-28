import { Signal, signal } from "@angular/core";

export interface IRegistry<T> {
    register: (registries: T) => void;
    read: () => T | undefined;
}

export function createRegistry<T>(): IRegistry<T> {
    let registries: T;

    return {
        register: (deps: T) => registries = deps,
        read: () => registries
    };
}

/**
 * @description signal registry example POC
 */
// function createSignalRegistry<T>(): IRegistry<T> {
//     const registry = createRegistry<Signal<T> | undefined>();

//     const d= {
//         register: (deps: T) => registry.register(signal(deps)),
//         read: () => registry.read()()
//     }

//     return d;
// }
