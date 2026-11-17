import { JsonPipe, NgClass } from "@angular/common";
import { Component, signal } from "@angular/core";
import { FormField, FormRoot, email, form, required } from "@angular/forms/signals";

import { IRegistration } from "../signal.form.model";

interface IMyRegistration extends IRegistration {
    email: string;
}

@Component({
    selector: "app-signal.form.advance",
    styleUrl: "./signal.form.advance.css",
    templateUrl: "./signal.form.advance.html",
    imports: [FormField, JsonPipe, FormRoot, NgClass],
})
export class SignalFormAdvance {
    public readonly registrationModel = signal<IMyRegistration>({
        firstName: "",
        lastName: "",
        email: ""
    });

    public readonly formModel = form(this.registrationModel,
        (path) => {
            required(path.firstName);
            required(path.lastName);
            required(path.email);

            email(path.email);
        }, {
        submission: {
            action: async (field) => {
                alert("form submitted!");
                console.log("registration data", field().value());
            }
        }
    });
}
