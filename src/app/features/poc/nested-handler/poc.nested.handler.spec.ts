import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PocNestedHandler } from "./poc.nested.handler";

describe("PocNestedHandler", () => {
    let component: PocNestedHandler;
    let fixture: ComponentFixture<PocNestedHandler>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PocNestedHandler],
        }).compileComponents();

        fixture = TestBed.createComponent(PocNestedHandler);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
