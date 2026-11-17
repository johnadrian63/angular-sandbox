import { Component, signal } from "@angular/core";
import { form, FormField } from "@angular/forms/signals";
import { JsonPipe } from "@angular/common";

import { IRegistration } from "../signal.form.model";

@Component({
    selector: "app-signal-form-submit",
    styleUrl: "./signal.form.submit.css",
    templateUrl: "./signal.form.submit.html",
    imports: [FormField, JsonPipe],
})
export class SignalFormSubmit {
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
