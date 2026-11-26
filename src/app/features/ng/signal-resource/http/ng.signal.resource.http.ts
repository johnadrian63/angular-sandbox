import { JsonPipe } from "@angular/common";
import { httpResource } from "@angular/common/http";
import { Component, signal } from "@angular/core";

@Component({
    selector: "app-ng-signal-resource-http",
    templateUrl: "./ng.signal.resource.http.html",
    imports: [JsonPipe]
})
export class NgSignalResourceHttp {
    public readonly postResource = httpResource(() => ({
        url: `https://dummyjson.com/posts/${this.postId()}`,
    }));

    public readonly postId = signal<number>(1);

    public fetchRandomPost(): void {
        const postId = this.generateRandomNumber(1, 4);

        this.postId.set(postId);
    }

    private generateRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
