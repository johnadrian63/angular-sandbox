import { IconDefinition, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

import { IMenuItem } from "../../../shared/navigation/navigation.model";
import { LayoutDisplayThemeSwitcherHandler } from "../../../../layout/shared/display/theme-switcher/layout.display.theme.switcher.handler";
import { DemoAppCmsHeaderNavigationHorizontalMenuProfileDropdownDisplayHandler } from "./header/navigation/horizontal-utility/demo.app.cms.header.navigation.horizontal.utility.display.handler";

export interface ICmsMenuItem extends IMenuItem {
    icon?: IconDefinition | null;
    children?: ICmsMenuItem[];
}

export const demoAppCmsNavigationData: ICmsMenuItem[] = [
    {
        label: "user",
        text: "User Management",
        // icon: faUser,
        path: "/demo/cms/users",
        children: [
            {
                label: "users",
                text: "List",
                path: "/demo/cms/users/list",
                // icon: faUser,
            },
        ]
    },
    {
        label: "post",
        text: "Posts Management",
        path: "/demo/cms/posts"
    }
];

export const demoAppCmsProfileNavigationData: IMenuItem[] = [
    {
        label: "",
        text: "",
        handler: LayoutDisplayThemeSwitcherHandler
    },
    {
        label: "john",
        text: "John",
        handler: DemoAppCmsHeaderNavigationHorizontalMenuProfileDropdownDisplayHandler,
        children: [
            {
                label: "profile",
                text: "Profile",
            },
            {
                label: "logout",
                text: "Logout",
            },
        ]
    }
];
