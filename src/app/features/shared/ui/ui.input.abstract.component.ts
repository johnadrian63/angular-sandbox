import {
    Component,
    Input,
    OnInit
} from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    template: ""
})
export abstract class UiInputAbstract implements OnInit {
    // FIXME refactor this!
    @Input() public control!: FormControl;

    public ngOnInit(): void {
        if (this.control instanceof FormControl == false) {
            throw new Error("control is required.");
        }
    }
}
