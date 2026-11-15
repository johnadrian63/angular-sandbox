import { Type } from "@angular/core";

import { IMenuItem } from "../../shared/navigation/navigation.model";
import { PocNestedHandlerDisplay } from "./display/poc.nested.handler.display";

export interface IMyMenuItem extends IMenuItem {
    resolver?: Type<PocNestedHandlerDisplay>;
}
