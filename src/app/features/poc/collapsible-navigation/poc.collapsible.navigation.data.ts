import { IMenuItem } from "../../shared/navigation/navigation.model";

export const pocCollapsibleNavigationData: IMenuItem[] = [
    {
        label: "level1_menu1",
        text: "User Management(Level1)",
        children: [
            {
                label: "level2_menu12",
                text: "Sub Menu 1 (Level 2)",
                children: [
                    {
                        label: "level2_menu1",
                        text: "Sub Menu Menu 12 (Level 2)",
                    }
                ]
            },
            {
                label: "level2_menu1",
                text: "Sub Menu 2 (Level 2)",
                children: [
                    {
                        label: "level2_menu1",
                        text: "Sub Menu Menu 12 (Level 2)",
                        children: [
                            {
                                label: "level2_menu1",
                                text: "Sub Menu Menu 12 (Level 2)",
                            }
                        ]
                    }
                ]
            },
            {
                label: "level2_menu2",
                text: "Menu 3 (Level 2)",
            }
        ]
    },
    {
        label: "level1_menu2",
        text: "Account Management (Level1)",
    },
    {
        label: "level1_menu2",
        text: "Post Management (Level1)",
        children: [
            {
                label: "level2_menu1",
                text: "Menu 1 (Level 2)",
            },
            {
                label: "level2_menu2",
                text: "Menu 2 (Level 2)",
                children: [
                    {
                        label: "level2_menu1",
                        text: "Sub Menu Menu 12 (Level 2)",
                    }
                ]
            }
        ]
    },
    {
        label: "level1_menu2",
        text: "Data Management (Level1)11",
        children: [
            {
                label: "level2_menu1",
                text: "Menu 1 (Level 2)",
            },
            {
                label: "level2_menu2",
                text: "Menu 2 (Level 2)",
                children: [
                    {
                        label: "level2_menu1",
                        text: "Sub Menu Menu 12 (Level 2)",
                        children: [
                            {
                                label: "level2_menu1",
                                text: "Sub Menu Menu 12 (Level 2)",
                                children: [
                                    {
                                        label: "level2_menu1",
                                        text: "Sub Menu Menu 12 (Level 2)",
                                        children: [
                                            {
                                                label: "level2_menu1",
                                                text: "Sub Menu Menu 12 (Level 42)",
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];