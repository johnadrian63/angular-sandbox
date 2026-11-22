import { IconDefinition, faUser } from "@fortawesome/free-solid-svg-icons";

import { IMenuItem } from "../../../shared/navigation/navigation.model";
import { LayoutDisplayThemeSwitcherHandler } from "../../../../layout/shared/display/theme-switcher/layout.display.theme.switcher.handler";
import { DemoAppCmsHeaderNavigationHorizontalMenuProfileDropdownDisplayHandler } from "./header/navigation/horizontal-utility/demo.app.cms.header.navigation.horizontal.utility.display.handler";

export interface ICmsMenuItem extends IMenuItem {
    icon?: IconDefinition;
}

export const demoAppCmsNavigationData: ICmsMenuItem[] = [
    {
        label: "user",
        text: "Users",
        icon: faUser,
        path: "/demo/cms/users"
    },
    {
        label: "post",
        text: "Posts",
        icon: faUser,
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