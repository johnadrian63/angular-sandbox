import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DemoAppCmsHeaderNavigationHorizontalMenu } from "./demo.app.cms.header.navigation.horizontal.menu"

describe("DemoAppCmsHeaderNavigationHorizontalMenu", () => {
    let component: DemoAppCmsHeaderNavigationHorizontalMenu;
    let fixture: ComponentFixture<DemoAppCmsHeaderNavigationHorizontalMenu>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DemoAppCmsHeaderNavigationHorizontalMenu],
        }).compileComponents();

        fixture = TestBed.createComponent(DemoAppCmsHeaderNavigationHorizontalMenu);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
