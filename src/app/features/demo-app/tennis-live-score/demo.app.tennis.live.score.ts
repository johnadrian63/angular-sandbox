import { HttpClient } from "@angular/common/http";
import { Component, inject, signal } from "@angular/core";

@Component({
    selector: "app-demo-app-tennis-live-score",
    styleUrl: "./demo.app.tennis.live.score.css",
    templateUrl: "./demo.app.tennis.live.score.html",
    imports: [],
})

export class DemoAppTennisLiveScore {
    private readonly httpClient: HttpClient = inject<HttpClient>(HttpClient);
    private readonly counter = signal(0);

    public async play(): Promise<void> {
        const path = "audio";
        const sources: string[][] = [
            [`${path}/serving.mp3`,
            `${path}/rybakina.mp3`],
            [`${path}/love-15.mp3`, `${path}/comment-1.mp3`],
            [`${path}/love-30.mp3`],
            [`${path}/15-30.mp3`],
            [`${path}/30-all.mp3`],
            [`${path}/advantage.mp3`,
            `${path}/rybakina.mp3`],
            [`${path}/deuce.mp3`],
            [`${path}/advantage.mp3`,
            `${path}/rybakina.mp3`],
            [`${path}/deuce.mp3`],
            [`${path}/advantage.mp3`,
            `${path}/sabalenka.mp3`],
            [`${path}/deuce.mp3`],
            [`${path}/advantage.mp3`,
            `${path}/rybakina.mp3`],
            [`${path}/game.mp3`,
            `${path}/rybakina.mp3`],
            [`${path}/3rd-set.mp3`]

        ];

        for (let source of sources[this.counter()]) {
            await new Promise<void>((resolve, reject) => {
                const audio = new Audio(source);

                audio.onended = () => resolve();
                audio.onerror = () => reject(
                    new Error(`Failed to load ${source}`)
                );

                audio.play().catch(reject);
            });
        }

        this.counter.update((counter) => counter < sources.length - 1 ? counter + 1 : 0);

        console.log(this.counter());
        this.play();
    }
}
