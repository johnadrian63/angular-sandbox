import { IconDefinition, faUser } from "@fortawesome/free-solid-svg-icons";

import { IMenuItem } from "../../../../shared/navigation/navigation.model";

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
