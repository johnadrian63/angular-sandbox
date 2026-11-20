import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DemoAppCmsHeaderNavigationHorizontalUtility } from "./demo.app.cms.header.navigation.horizontal.utility";

describe("DemoAppCmsHeaderNavigationHorizontalUtility", () => {
    let component: DemoAppCmsHeaderNavigationHorizontalUtility;
    let fixture: ComponentFixture<DemoAppCmsHeaderNavigationHorizontalUtility>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DemoAppCmsHeaderNavigationHorizontalUtility],
        }).compileComponents();

        fixture = TestBed.createComponent(DemoAppCmsHeaderNavigationHorizontalUtility);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
