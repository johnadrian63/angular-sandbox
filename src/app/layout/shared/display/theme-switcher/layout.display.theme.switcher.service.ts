import { Injectable, Service } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export type LayoutTheme = "" | "light" | "dark";

@Injectable({
    providedIn: "root"
})
export class LayoutDisplayThemeSwitcherService {
    private readonly subject: BehaviorSubject<LayoutTheme> = new BehaviorSubject<LayoutTheme>("");

    private readonly themeKey: string = "theme";

    public getTheme(): Observable<LayoutTheme> {
        let theme = <LayoutTheme>localStorage.getItem(this.themeKey);

        if (theme) {
            this.subject.next(theme);
        } else {
            this.subject.next("");
        }

        return this.subject.asObservable();
    }

    public setTheme(theme: LayoutTheme): void {
        localStorage.setItem(this.themeKey, theme);

        this.subject.next(theme);
    }
}
