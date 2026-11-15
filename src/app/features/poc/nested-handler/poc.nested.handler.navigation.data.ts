import { IMyMenuItem } from "./my.menu.model";
import { PocNestedHandlerDisplayLink } from "./display/link/poc.nested.handler.display.link";
import { PocNestedHandlerDisplayDropdown } from "./display/dropdown/poc.nested.handler.display.dropdown";

export const pocNestedHandlerNavigation: IMyMenuItem[] = [
    {
        label: "menu1",
        text: "Menu 1"
    },
    {
        label: "menu2",
        text: "Menu 2",
    },
    {
        label: "menu3",
        text: "Menu 3",
        resolver: PocNestedHandlerDisplayLink
    },
    {
        label: "menu4",
        text: "Menu 4",
    },
    {
        label: "menu4",
        text: "Menu 4",
        resolver: PocNestedHandlerDisplayDropdown
    }
];
