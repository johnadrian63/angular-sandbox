import { JsonPipe, NgClass } from "@angular/common";
import { Component, signal } from "@angular/core";
import { FormField, FormRoot, email, form, required } from "@angular/forms/signals";

import { IRegistration } from "../signal.form.model";

export interface IMyRegistration extends IRegistration {
    email: string;
}

@Component({
    selector: "app-signal-form-advance",
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
            required(path.firstName, {
                message: "First name is required."
            });
            required(path.lastName, {
                message: "Last name is required."
            });

            required(path.email, {
                message: "Email is required."
            });
            email(path.email, {
                message: "Invalid email format."
            });
        }, {
        submission: {
            action: async (field) => {
                console.log("registration data", field().value());
            }
        }
    });

    public setValue(): void {
        this.formModel.firstName().value.set("John");
        this.formModel.lastName().value.set("Doe");
        this.formModel.email().value.set("john.doe@abc.com");
    }

    public resetValue(): void {
        this.formModel().reset({
            firstName: "",
            lastName: "",
            email: ""
        });
    }
}
