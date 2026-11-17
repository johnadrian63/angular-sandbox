import { Component, model } from "@angular/core";
import { NgClass } from "@angular/common";

import { NavigationDisplay } from "../navigation.display";

@Component({
    selector: "app-navigation-display-image",
    templateUrl: "./navigation.display.image.html",
    imports: [NgClass],
})
export class NavigationDisplayImage extends NavigationDisplay {
    public readonly src = model<string>();
    public readonly width = model<string>();
    public readonly height = model<string>();
}
