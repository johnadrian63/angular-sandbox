import { Component, signal } from "@angular/core";
import { form, FormField } from "@angular/forms/signals";

import { IRegistration } from "../signal.form.model";

@Component({
    selector: "app-signal-form-basic",
    styleUrl: "./signal.form.basic.css",
    templateUrl: "./signal.form.basic.html",
    imports: [FormField],
})
export class SignalFormBasic {
    public readonly registrationModel = signal<IRegistration>({
        firstName: "",
        lastName: ""
    });

    public readonly formModel = form(this.registrationModel);

    public onSubmit(event: Event): void {
        event.preventDefault();

        const registrationData = this.registrationModel();

        console.log("registration data", registrationData);
    }
}
