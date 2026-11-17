import { IMenuItem } from "../../shared/navigation/navigation.model";
import { PocDynamicNavigationDisplayAnimalHandler, PocDynamicNavigationDisplayColorHandler, PocDynamicNavigationDisplayImageHandler } from "./poc.dynamic.navigation.horizontal.display.handler";

export const pocDynamicNavigationData: IMenuItem[] = [
    {
        label: "colors",
        text: "Colors",
        children: [
            {
                label: "red",
                text: "Red",
                handler: PocDynamicNavigationDisplayColorHandler
            },
            {
                label: "blue",
                text: "Blue",
                handler: PocDynamicNavigationDisplayColorHandler
            },
            {
                label: "black",
                text: "Black",
                handler: PocDynamicNavigationDisplayColorHandler
            },
            {
                label: "green",
                text: "Green",
                handler: PocDynamicNavigationDisplayColorHandler
            },
            {
                label: "yellow",
                text: "Yellow",
                handler: PocDynamicNavigationDisplayColorHandler
            },
            {
                label: "gray",
                text: "Gray",
                handler: PocDynamicNavigationDisplayColorHandler
            },
            {
                label: "cyan",
                text: "Cyan",
                handler: PocDynamicNavigationDisplayColorHandler
            },
            {
                label: "violet",
                text: "Violet",
                handler: PocDynamicNavigationDisplayColorHandler
            },
            {
                label: "pink",
                text: "Pink",
                handler: PocDynamicNavigationDisplayColorHandler
            }
        ]
    },
    {
        label: "animals",
        text: "Animals",
        children: [
            {
                label: "dog",
                text: "Dog",
                handler: PocDynamicNavigationDisplayAnimalHandler
            },
            {
                label: "cat",
                text: "Cat",
                handler: PocDynamicNavigationDisplayAnimalHandler
            },
            {
                label: "horse",
                text: "Horse",
                handler: PocDynamicNavigationDisplayAnimalHandler
            },
            {
                label: "hippo",
                text: "Hippopotamus",
                handler: PocDynamicNavigationDisplayAnimalHandler
            },
            {
                label: "fish",
                text: "Fish",
                handler: PocDynamicNavigationDisplayAnimalHandler
            },
            {
                label: "crow",
                text: "Crow",
                handler: PocDynamicNavigationDisplayAnimalHandler
            },
            {
                label: "cow",
                text: "Cow",
                handler: PocDynamicNavigationDisplayAnimalHandler
            },
        ]
    },
    {
        label: "images",
        text: "Images",
        children: [
            {
                label: "bridge",
                text: "Bridge",
                handler: PocDynamicNavigationDisplayImageHandler
            },
            {
                label: "machine",
                text: "Machine",
                handler: PocDynamicNavigationDisplayImageHandler
            },
            {
                label: "strawberries",
                text: "Strawberries",
                handler: PocDynamicNavigationDisplayImageHandler
            },
            {
                label: "wolf",
                text: "Wolf",
                handler: PocDynamicNavigationDisplayImageHandler
            },
            {
                label: "sunset",
                text: "Sunset",
                handler: PocDynamicNavigationDisplayImageHandler
            },
        ]
    },
    {
        label: "assorted",
        text: "Assorted",
        children: [
            {
                label: "green",
                text: "Green",
                handler: PocDynamicNavigationDisplayColorHandler,
                children: [
                    {
                        label: "cyan",
                        text: "Cyan",
                        handler: PocDynamicNavigationDisplayColorHandler
                    },
                    {
                        label: "violet",
                        text: "Violet",
                        handler: PocDynamicNavigationDisplayColorHandler
                    },
                    {
                        label: "pink",
                        text: "Pink",
                        handler: PocDynamicNavigationDisplayColorHandler
                    }
                ]
            },
            {
                label: "crow",
                text: "Crow",
                handler: PocDynamicNavigationDisplayAnimalHandler
            },
            {
                label: "sunset",
                text: "Sunset",
                handler: PocDynamicNavigationDisplayImageHandler,
                children: [
                    {
                        label: "fish",
                        text: "Fish",
                        handler: PocDynamicNavigationDisplayAnimalHandler
                    },
                    {
                        label: "crow",
                        text: "Crow",
                        handler: PocDynamicNavigationDisplayAnimalHandler
                    },
                ]
            },
            {
                label: "pink",
                text: "Pink",
                handler: PocDynamicNavigationDisplayColorHandler
            }
        ]
    }
];
