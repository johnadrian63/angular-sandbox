import { IMenuItem } from "../../features/shared/navigation/navigation.model";
import { NavigationHorizontalCdkDropdownLinkDisplayHandler } from "../../features/shared/navigation/horizontal/cdk/navigation.horizontal.cdk.display.handler";
import { LayoutDisplayGitHubLinkHandler, LayoutDisplayOpenLinkHandler, LayoutDisplayResponsiveLinkHandler, LayoutDisplayThemeSwitcherHandler } from "./layout.default.navigation.horizontal.display.handler";

export const layoutDefaultNavigationData: IMenuItem[] = [
    {
        label: "flex",
        text: "Flex",
        path: "/flex",
        handler: NavigationHorizontalCdkDropdownLinkDisplayHandler,
        children: [
            {
                label: "flex_parent",
                text: "Parent",
                children: [
                    {
                        label: "flex_parent_flex",
                        text: "Flex",
                        path: "/flex/parent/basic"
                    },
                    {
                        label: "flex_parent_justify",
                        text: "Justify",
                        path: "/flex/parent/justify"
                    },
                    {
                        label: "flex_parent_align",
                        text: "Align",
                        path: "/flex/parent/align"
                    },
                    {
                        label: "flex_parent_gap",
                        text: "Gap",
                        path: "/flex/parent/gap"
                    },
                    {
                        label: "flex_parent_basis",
                        text: "Basis",
                        path: "/flex/parent/basis"
                    }
                ]
            },
            {
                label: "flex_child",
                text: "Child",
                children: [
                    {
                        label: "flex_child_flex",
                        text: "Self Align",
                        path: "/flex/child/self-align"
                    },
                    {
                        label: "flex_child_align_items",
                        text: "Align Items",
                        path: "/flex/child/align-items"
                    },
                    {
                        label: "flex_child_grow",
                        text: "Grow",
                        path: "/flex/child/grow"
                    },
                    {
                        label: "flex_child_shrink",
                        text: "Shrink",
                        path: "/flex/child/shrink"
                    }
                ]
            }
        ]
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
        label: "poc",
        text: "POC",
        path: "/poc"
    },
    {
        label: "ng",
        text: "NG",
        path: "/ng"
    },
    {
        label: "material",
        text: "Material",
        path: "/material"
    },
    {
        label: "design_patterns",
        text: "Design Patterns",
        path: "/design-patterns"
    },
    {
        label: "responsive_layout",
        text: "CMS Layout",
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
