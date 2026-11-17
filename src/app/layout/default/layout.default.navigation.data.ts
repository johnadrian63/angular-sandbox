import { NavigationHorizontalCdkDropdownLinkDisplayHandler } from "../../features/shared/navigation/horizontal/cdk/navigation.horizontal.cdk.display.handler";
import { IMenuItem } from "../../features/shared/navigation/navigation.model";
import { LayoutDisplayGitHubLinkHandler, LayoutDisplayOpenLinkHandler, LayoutDisplayResponsiveLinkHandler, LayoutDisplayThemeSwitcherHandler } from "./layout.default.navigation.horizontal.display.handler";

export const layoutDefaultNavigationData: IMenuItem[] = [
    {
        label: "flex_parent",
        text: "Flex (Parent)",
        path: "/flex/parent"
    },
    {
        label: "flex_child",
        text: "Flex (Child)",
        path: "/flex/child",
    },
    {
        label: "grid",
        text: "Grid",
        path: "/grid",
        handler: NavigationHorizontalCdkDropdownLinkDisplayHandler,
        children: [
            {
                label: "grid",
                text: "Grid Column",
                path: "/grid/grid-column",
            },
            {
                label: "grid",
                text: "Grid Row",
                path: "/grid/grid-row",
            },
            {
                label: "grid",
                text: "Grid Flow",
                path: "/grid/grid-flow",
            }
        ]
    },
    {
        label: "material",
        text: "Material",
        path: "/material"
    },
    {
        label: "ng",
        text: "NG",
        path: "/ng"
    },
    {
        label: "design_patterns",
        text: "Design Patterns",
        path: "/design-patterns"
    },
    {
        label: "poc",
        text: "POC",
        path: "/poc"
    },
    {
        label: "basic_layout",
        text: "Basic Layout",
        path: "/example",
        target: "_blank",
        handler: LayoutDisplayOpenLinkHandler
    },
    {
        label: "responsive_layout",
        text: "Responsive Layout",
        path: "/example/responsive",
        target: "_blank",
        handler: LayoutDisplayResponsiveLinkHandler
    },
    {
        label: "github",
        text: "Github",
        path: "https://github.com/johnadrian63/angular-sandbox",
        target: "_blank",
        handler: LayoutDisplayGitHubLinkHandler
    },
    {
        label: "",
        text: "",
        handler: LayoutDisplayThemeSwitcherHandler
    }
];
