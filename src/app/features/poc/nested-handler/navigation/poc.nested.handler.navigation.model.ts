import { Type } from "@angular/core";

import { IMyMenuItem } from "../my.menu.model";
import { PocNestedHandlerDisplay } from "../display/poc.nested.handler.display";
import { PocNestedHandlerDisplayLink } from './../display/link/poc.nested.handler.display.link';
import { PocNestedHandlerDisplayDropdown } from "../display/dropdown/poc.nested.handler.display.dropdown";

export interface IPocNestedHandlerNavigationVisitor<T> {
    visitSingle(): T;
    visitNested(): T;
    visitSubSingle(): T;
    visitSubNested(): T;
    visitCustom(): T;
}

export interface IPocNestedHandlerNavigation {
    accept<T>(visitor: IPocNestedHandlerNavigationVisitor<T>): T;
}

export class PocNestedHandlerNavigationSingle implements IPocNestedHandlerNavigation {
    public accept<T>(visitor: IPocNestedHandlerNavigationVisitor<T>): T {
        return visitor.visitSingle();
    }
}

export class PocNestedHandlerNavigationNested implements IPocNestedHandlerNavigation {
    public accept<T>(visitor: IPocNestedHandlerNavigationVisitor<T>): T {
        return visitor.visitNested();
    }
}

export class PocNestedHandlerNavigationSubSingle implements IPocNestedHandlerNavigation {
    public accept<T>(visitor: IPocNestedHandlerNavigationVisitor<T>): T {
        return visitor.visitSubSingle();
    }
}

export class PocNestedHandlerNavigationSubNested implements IPocNestedHandlerNavigation {
    public accept<T>(visitor: IPocNestedHandlerNavigationVisitor<T>): T {
        return visitor.visitSubNested();
    }
}

export class PocNestedHandlerNavigationCustom implements IPocNestedHandlerNavigation {
    public accept<T>(visitor: IPocNestedHandlerNavigationVisitor<T>): T {
        return visitor.visitCustom();
    }
}

export class PocNestedHandlerNavigationVisitor implements IPocNestedHandlerNavigationVisitor<Type<PocNestedHandlerDisplay>> {
    constructor(private readonly menu: IMyMenuItem) { }

    public visitSingle(): Type<PocNestedHandlerDisplayLink> {
        return PocNestedHandlerDisplayLink;
    }

    public visitNested(): Type<PocNestedHandlerDisplayDropdown> {
        return PocNestedHandlerDisplayDropdown;
    }

    public visitSubSingle(): Type<PocNestedHandlerDisplay> {
        throw new Error("Method not implemented.");
    }

    public visitSubNested(): Type<PocNestedHandlerDisplay> {
        throw new Error("Method not implemented.");
    }

    public visitCustom(): Type<PocNestedHandlerDisplay> {
        return this.menu.resolver!;
    }
}
