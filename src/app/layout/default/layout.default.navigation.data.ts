import { IMenuItem } from "../../features/shared/navigation/navigation.model";
import { LayoutDisplayThemeSwitcherHandler } from "./layout.default.display.handler";

export const layoutDefaultNavigationData: IMenuItem[] = [
    {
        label: "flex_parent",
        text: "Flex (Parent)",
        path: "/flex/parent"
    },
    {
        label: "flex_child",
        text: "Flex (Child)",
        path: "/flex/child"
    },
    {
        label: "grid",
        text: "Grid",
        path: "/grid"
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
        label: "basic_layout",
        text: "Basic Layout",
        path: "/example",
        target: "_blank"
    },
    {
        label: "responsive_layout",
        text: "Responsive Layout",
        path: "/example/responsive",
        target: "_blank"
    },
    {
        label: "",
        text: "",
        handler: LayoutDisplayThemeSwitcherHandler
    }
];
