import { Component, signal } from "@angular/core";
import { form, FormField, FormRoot, required } from "@angular/forms/signals";
import { JsonPipe } from "@angular/common";

import { IRegistration } from "../signal.form.model";

@Component({
    selector: "app-signal-form-advance",
    styleUrl: "./signal.form.advance.css",
    templateUrl: "./signal.form.advance.html",
    imports: [FormField, JsonPipe, FormRoot],
})
export class SignalFormAdvance {
    public readonly registrationModel = signal<IRegistration>({
        firstName: "",
        lastName: ""
    });

    public readonly formModel = form(this.registrationModel,
        (path) => {
            required(path.firstName);
            required(path.lastName);
        }, {
        submission: {
            action: async (field) => {
                console.log(">>>>>", field().value());
            }
        }
    });

    public onSubmit(event: Event): void {
        event.preventDefault();

        const registrationData = this.registrationModel();

        console.log("registration data", registrationData);
    }
}
