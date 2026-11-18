import { Type } from "@angular/core";
import { IconDefinition, faDog, faCat, faHorse, faHippo, faFish, faCrow, faCow } from "@fortawesome/free-solid-svg-icons";


import { NavigationDisplayHandler } from "../../shared/navigation/navigation.display.handler";
import { NavigationDisplayLink } from "../../shared/navigation/display/link/navigation.display.link";
import { INavigationHorizontalCdkDisplayHandlerVisitor, NavigationHorizontalCdkDisplayHandlerVisitor } from "../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.display.handler";
import { NavigationDisplayImage } from "../../shared/navigation/display/image/navigation.display.image";
import { PocDynamicNavigationDisplaySelectDropdown } from "./display/select/poc.dynamic.navigation.display.select.dropdown";

export interface IPocDynamicNavigationDisplayHandlerVisitor<T> extends INavigationHorizontalCdkDisplayHandlerVisitor<T> {
    visitColor(handler: PocDynamicNavigationDisplayColorHandler): T;
    visitAnimal(handler: PocDynamicNavigationDisplayAnimalHandler): T;
    visitImage(handler: PocDynamicNavigationDisplayImageHandler): T;
    visitSelectDropdown(handler: PocDynamicNavigationDisplaySelectDropdownHandler): T;
}

export class PocDynamicNavigationDisplayColorHandler extends NavigationDisplayHandler {
    public override readonly renderer: Type<NavigationDisplayLink> = NavigationDisplayLink;

    public accept<T>(visitor: IPocDynamicNavigationDisplayHandlerVisitor<T>): T {
        return visitor.visitColor(this);
    }
}

export class PocDynamicNavigationDisplayAnimalHandler extends NavigationDisplayHandler {
    public override readonly renderer: Type<NavigationDisplayLink> = NavigationDisplayLink;

    public accept<T>(visitor: IPocDynamicNavigationDisplayHandlerVisitor<T>): T {
        return visitor.visitAnimal(this);
    }
}

export class PocDynamicNavigationDisplayImageHandler extends NavigationDisplayHandler {
    public override readonly renderer: Type<NavigationDisplayImage> = NavigationDisplayImage;

    public accept<T>(visitor: IPocDynamicNavigationDisplayHandlerVisitor<T>): T {
        return visitor.visitImage(this);
    }
}

export class PocDynamicNavigationDisplaySelectDropdownHandler extends NavigationDisplayHandler {
    public override readonly renderer: Type<PocDynamicNavigationDisplaySelectDropdown> = PocDynamicNavigationDisplaySelectDropdown;

    public accept<T>(visitor: IPocDynamicNavigationDisplayHandlerVisitor<T>): T {
        return visitor.visitSelectDropdown(this);
    }
}

const colorMapper = new Map<string, string>([
    ["red", "bg-red-600"],
    ["blue", "bg-blue-600"],
    ["green", "bg-green-600"],
    ["yellow", "bg-yellow-600"],
    ["cyan", "bg-cyan-600"],
    ["violet", "bg-violet-600"],
    ["pink", "bg-pink-600"],
    ["black", "bg-black"],
    ["gray", "bg-gray-600"],
]);

const animalIconMapper = new Map<string, IconDefinition>([
    ["dog", faDog],
    ["cat", faCat],
    ["horse", faHorse],
    ["hippo", faHippo],
    ["fish", faFish],
    ["crow", faCrow],
    ["cow", faCow],
]);

const imageMapper = new Map<string, string>([
    ["bridge", "https://fastly.picsum.photos/id/134/150/150.jpg?hmac=Y1Iq5Dn_JQB5JLnpgDXOhe6MIVKk2-Aztb5bCFyHXYU"],
    ["machine", "https://fastly.picsum.photos/id/60/150/150.jpg?hmac=hgbZzYQz2lgI1dfgedklTtWk0_iggXOiSlPUb9npzm8"],
    ["strawberries", "https://fastly.picsum.photos/id/1080/150/150.jpg?hmac=LbfnwGbA-k7IqLka9VDZQKSun6CQHXAT7Hp_LDeuO18"],
    ["wolf", "https://fastly.picsum.photos/id/718/150/150.jpg?hmac=YtccQjWWJCAjzqZe0lLF1O5Y4svRAItUWu-lxUxrykg"],
    ["sunset", "https://fastly.picsum.photos/id/206/150/150.jpg?hmac=wzOGoLL3hvAHXlQZMBtlV0gReSLLUQ4HGBmTptaSu6U"],
    ["railway", "https://fastly.picsum.photos/id/155/150/150.jpg?hmac=aajrc03K9pQfcr7tQtWt9xUC5EIco7bEgb65CW1sfhg"],
]);

export class PocDynamicNavigationDisplayHandlerVisitor extends NavigationHorizontalCdkDisplayHandlerVisitor implements IPocDynamicNavigationDisplayHandlerVisitor<void> {
    public visitColor(handler: PocDynamicNavigationDisplayColorHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);

        let classes = "px-3 py-1 flex text-white";

        const bgColor = colorMapper.get(handler.menu.label);

        classes += ` ${bgColor}`;

        componentRef.instance.classes = classes;

        componentRef.location.nativeElement.classList.add("w-full");
    }

    public visitAnimal(handler: PocDynamicNavigationDisplayColorHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);

        const icon = animalIconMapper.get(handler.menu.label);

        componentRef.instance.iconLeft = icon!;

        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.location.nativeElement.classList.add("w-full");
    }

    public visitImage(handler: PocDynamicNavigationDisplayImageHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);

        const src = imageMapper.get(handler.menu.label);


        componentRef.instance.src.set(src);
        componentRef.instance.width.set("60");
        componentRef.instance.height.set("60");

        componentRef.instance.classes = "px-3 py-1 flex justify-center";

        componentRef.location.nativeElement.classList.add("w-full");
    }

    public visitSelectDropdown(handler: PocDynamicNavigationDisplaySelectDropdownHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);

        componentRef.instance.classes = "px-3 py-1 flex justify-center cursor-pointer border border-gray-200";

        componentRef.location.nativeElement.classList.add("w-full");
    }
}
