import { IMenuItem } from "../../features/shared/navigation/navigation.model";
import { LayoutDisplayThemeSwitcherHandler } from "../shared/display/theme-switcher/layout.display.theme.switcher.handler";
import { LayoutDisplayGitHubLinkHandler, LayoutDisplayResponsiveLinkHandler } from "./layout.default.navigation.horizontal.display.handler";
import { NavigationHorizontalCdkDropdownLinkDisplayHandler } from "../../features/shared/navigation/horizontal/cdk/navigation.horizontal.cdk.display.handler";

export const layoutDefaultNavigationData: IMenuItem[] = [
    {
        label: "poc",
        text: "POC",
        path: "/poc",
        handler: NavigationHorizontalCdkDropdownLinkDisplayHandler,
        children: [
            {
                label: "table_builder_basic",
                text: "Table Builder (Basic)",
                path: "/poc/table-builder"
            },
            {
                label: "dynamic_navigation",
                text: "Dynamic Navigation",
                path: "/poc/dynamic-navigation"
            },
            {
                label: "collapsible_navigation",
                text: "Collapsible Navigation",
                path: "/poc/collapsible-navigation"
            },
            {
                label: "nested_handler",
                text: "Nested Handler",
                path: "/poc/nested-handler"
            },
            {
                label: "resource_service",
                text: "Resource Service",
                path: "/poc/resource-service"
            },
            // TODO: disable for now. Investigate why WebSocket doesn't work on Vercel.
            // {
            //     label: "websocket",
            //     text: "WebSocket",
            //     path: "/poc/websocket"
            // }
        ]
    },
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
        label: "ng",
        text: "NG",
        path: "/ng",
        handler: NavigationHorizontalCdkDropdownLinkDisplayHandler,
        children: [
            {
                label: "signal_forms",
                text: "Signal Forms",
                path: "/ng/signal-form/using-submit",
            },
            {
                label: "vcr",
                text: "ViewContainerRef",
                path: "/ng/vcr",
            },
            {
                label: "signal_resource",
                text: "Signal Resource",
                path: "/ng/signal-resource",
            },
        ]
    },
    {
        label: "material",
        text: "Material",
        path: "/material"
    },
    {
        label: "demo_app",
        text: "Demo App",
        path: "/demo",
        handler: NavigationHorizontalCdkDropdownLinkDisplayHandler,
        children: [
            {
                label: "demo_app_cms",
                text: "CMS",
                path: "/demo/cms",
            }
        ]
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
