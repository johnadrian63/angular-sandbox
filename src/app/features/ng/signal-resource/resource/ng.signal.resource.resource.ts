import { JsonPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, resource, signal } from "@angular/core";
import { lastValueFrom } from "rxjs";

@Component({
    selector: "app-ng-signal-resource-resource",
    templateUrl: "./ng.signal.resource.resource.html",
    imports: [JsonPipe]
})
export class NgSignalResourceResource {
    public readonly userResource = resource({
        params: () => this.userId(),
        loader: () => {
            return this.getUser();
        }
    });

    public readonly userId = signal<number>(1);

    private readonly httpClient = inject<HttpClient>(HttpClient);

    public async getUser(): Promise<any> {
        const apiUrl = "https://dummyjson.com/users";

        return await lastValueFrom(this.httpClient.get(`${apiUrl}/${this.userId()}`));
    }

    public fetchRandomUser(): void {
        const userId = this.generateRandomNumber(1, 4);

        this.userId.set(userId);
    }

    private generateRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
