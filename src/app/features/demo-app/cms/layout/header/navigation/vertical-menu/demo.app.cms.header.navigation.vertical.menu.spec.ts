import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DemoAppCmsHeaderNavigationVerticalMenu } from "./demo.app.cms.header.navigation.vertical.menu";

describe("DemoAppCmsHeaderNavigationVerticalMenu", () => {
    let component: DemoAppCmsHeaderNavigationVerticalMenu;
    let fixture: ComponentFixture<DemoAppCmsHeaderNavigationVerticalMenu>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DemoAppCmsHeaderNavigationVerticalMenu],
        }).compileComponents();

        fixture = TestBed.createComponent(DemoAppCmsHeaderNavigationVerticalMenu);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
