import { LayoutDisplayThemeSwitcherHandler } from "../../../../layout/default/layout.default.navigation.horizontal.display.handler";
import { IMenuItem } from "../../../shared/navigation/navigation.model";

export const exampleResponsiveNavigationData: IMenuItem[] = [
    {
        label: "dashboard",
        text: "Dashboard",
    },
    {
        label: "account",
        text: "Account",
        children: [
            {
                label: "view_account_list",
                text: "Account List",
            },
            {
                label: "create_account",
                text: "Create Account",
            }
        ]
    },
    {
        label: "post",
        text: "Posts",
        children: [
            {
                label: "view_post_list",
                text: "Post List",
            },
            {
                label: "create_account",
                text: "Create Post",
            }
        ]
    },
    {
        label: "analytics",
        text: "Analytics",
    },
    {
        label: "",
        text: "",
        handler: LayoutDisplayThemeSwitcherHandler
    }
];
