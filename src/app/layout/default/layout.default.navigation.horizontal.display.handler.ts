import { ComponentRef, Type } from "@angular/core";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { IMenuItem } from "../../features/shared/navigation/navigation.model";
import { LayoutDefaultThemeSwitcher } from "./display/theme-switcher/layout.default.theme.switcher";
import { NavigationDisplayLink } from "../../features/shared/navigation/display/link/navigation.display.link";
import { NavigationDisplayHandler, NavigationDisplayLinkHandler } from "../../features/shared/navigation/navigation.display.handler";
import { INavigationHorizontalCdkDisplayHandlerVisitor, NavigationHorizontalCdkDisplayHandlerVisitor, NavigationHorizontalCdkDropdownLinkDisplayHandler } from "../../features/shared/navigation/horizontal/cdk/navigation.horizontal.cdk.display.handler";

export interface ILayoutDefaultDisplayHandlerVisitor<T> extends INavigationHorizontalCdkDisplayHandlerVisitor<T> {
    visitThemeSwitcher(handler: LayoutDisplayThemeSwitcherHandler): T;
    visitOpenLink(handler: LayoutDisplayOpenLinkHandler): T;
    visitGitHubLink(handler: LayoutDisplayGitHubLinkHandler): T;
    visitResponsiveLink(handler: LayoutDisplayResponsiveLinkHandler): T;
}

export class LayoutDisplayThemeSwitcherHandler extends NavigationDisplayHandler {
    public override readonly renderer: Type<LayoutDefaultThemeSwitcher> = LayoutDefaultThemeSwitcher;

    public override accept<T>(visitor: ILayoutDefaultDisplayHandlerVisitor<T>): T {
        return visitor.visitThemeSwitcher(this);
    }
}

export class LayoutDisplayOpenLinkHandler extends NavigationDisplayHandler {
    public override readonly renderer: Type<NavigationDisplayLink> = NavigationDisplayLink;

    public override accept<T>(visitor: ILayoutDefaultDisplayHandlerVisitor<T>): T {
        return visitor.visitOpenLink(this);
    }
}

export class LayoutDisplayGitHubLinkHandler extends NavigationDisplayHandler {
    public override readonly renderer: Type<NavigationDisplayLink> = NavigationDisplayLink;

    public override accept<T>(visitor: ILayoutDefaultDisplayHandlerVisitor<T>): T {
        return visitor.visitGitHubLink(this);
    }
}

export class LayoutDisplayResponsiveLinkHandler extends NavigationDisplayHandler {
    public override readonly renderer: Type<NavigationDisplayLink> = NavigationDisplayLink;

    public override accept<T>(visitor: ILayoutDefaultDisplayHandlerVisitor<T>): T {
        return visitor.visitResponsiveLink(this);
    }
}

export class LayoutDefaultDisplayHandlerVisitor extends NavigationHorizontalCdkDisplayHandlerVisitor implements ILayoutDefaultDisplayHandlerVisitor<void> {
    public override visitCdkDropdownLink(handler: NavigationHorizontalCdkDropdownLinkDisplayHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.menuClass = "mt-4";
        componentRef.instance.classes = "flex font-semibold";

        componentRef.changeDetectorRef.detectChanges();
    }

    public override visitLink(handler: NavigationDisplayLinkHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        this.renderLink(componentRef, handler.menu);
    }

    public visitOpenLink(handler: LayoutDisplayOpenLinkHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.iconLeft = faArrowUpRightFromSquare;

        this.renderLink(componentRef, handler.menu);
    }

    public visitGitHubLink(handler: LayoutDisplayGitHubLinkHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.iconLeft = faGithub;

        this.renderLink(componentRef, handler.menu);
    }

    public visitResponsiveLink(handler: LayoutDisplayResponsiveLinkHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.iconLeft = faMobileAlt;

        this.renderLink(componentRef, handler.menu);
    }

    public visitThemeSwitcher(handler: LayoutDisplayThemeSwitcherHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        const instance = componentRef.instance;

        instance.menu.set(handler.menu);
        instance.classes = "font-semibold";

        componentRef.changeDetectorRef.detectChanges();
    }

    private renderLink(componentRef: ComponentRef<NavigationDisplayLink>, menu: IMenuItem): void {
        componentRef.instance.menu.set(menu);
        componentRef.instance.classes = "flex font-semibold";

        componentRef.location.nativeElement.classList.add("mr-1");

        if (menu.target) {
            componentRef.instance.target.set(menu.target);
        }

        componentRef.changeDetectorRef.detectChanges();
    }
}
