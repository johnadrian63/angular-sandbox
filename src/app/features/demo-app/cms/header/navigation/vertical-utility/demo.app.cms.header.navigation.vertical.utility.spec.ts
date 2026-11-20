import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DemoAppCmsHeaderNavigationVerticalUtility } from "./demo.app.cms.header.navigation.vertical.utility";

describe("ExampleResponsiveNavigationVerticalProfileMenu", () => {
    let component: DemoAppCmsHeaderNavigationVerticalUtility;
    let fixture: ComponentFixture<DemoAppCmsHeaderNavigationVerticalUtility>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DemoAppCmsHeaderNavigationVerticalUtility],
        }).compileComponents();

        fixture = TestBed.createComponent(DemoAppCmsHeaderNavigationVerticalUtility);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
