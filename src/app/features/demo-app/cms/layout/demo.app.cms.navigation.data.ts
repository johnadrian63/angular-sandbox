import { IconDefinition, faUsers, faQuoteLeft, faFilePen, faTags, faTableList } from "@fortawesome/free-solid-svg-icons";

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
        path: "/demo/cms/users",
        icon: faUsers,
    },
    {
        label: "post",
        text: "Posts Management",
        path: "/demo/cms/posts",
        icon: faFilePen,
        children: [
            {
                label: "post_list",
                text: "List",
                path: "/demo/cms/posts/list",
                icon: faTableList,
            },
            {
                label: "post_tags",
                text: "Tags",
                path: "/demo/cms/posts/tags",
                icon: faTags,
            }
        ]
    },
    {
        label: "quotes",
        text: "Quotes",
        path: "/demo/cms/quotes",
        icon: faQuoteLeft
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
