import { IMenuItem } from "../shared/navigation/navigation.model";

export const materialNavigationData: IMenuItem[] = [
    {
        label: "static_menu",
        text: "Static Menu",
        path: "/material/menu-static",
    },
    {
        label: "dynamic_menu",
        text: "Dynamic Menu",
        path: "/material/menu-dynamic",
    },
    {
        label: "static_cdk_menu",
        text: "Static CDK Menu",
        path: "/material/cdk-menu-static",
    },
    {
        label: "dynamic_cdk_menu",
        text: "Dynamic CDK Menu",
        path: "/material/cdk-menu-dynamic",
    },
    {
        label: "bottom_sheet",
        text: "Bottom Sheet",
        path: "/material/bottom-sheet",
    },
    {
        label: "template_portal",
        text: "Template Portal",
        path: "/material/template-portal",
    }
];