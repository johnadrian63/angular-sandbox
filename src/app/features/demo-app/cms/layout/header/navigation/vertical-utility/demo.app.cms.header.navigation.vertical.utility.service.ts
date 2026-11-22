import { Injectable } from "@angular/core";

import { IMenuItem } from "../../../../../../shared/navigation/navigation.model";
import { NavigationVerticalService } from "../../../../../../shared/navigation/vertical/navigation.vertical.service";

@Injectable()
export class DemoAppCmsHeaderNavigationVerticalUtilityService extends NavigationVerticalService {
    public setMenus(menus: IMenuItem[]): void {
        this.menus.set(menus[0].children!);
    }
}
