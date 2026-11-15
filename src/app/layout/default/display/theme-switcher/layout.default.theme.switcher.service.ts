import { Service } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export type LayoutTheme = "system" | "light" | "dark";

@Service()
export class LayoutDefaultThemeSwitcherService {
    private readonly subject: BehaviorSubject<LayoutTheme> = new BehaviorSubject<LayoutTheme>("system");

    private readonly themeKey: string = "theme";

    public getTheme(): Observable<LayoutTheme> {
        const defaultTheme: LayoutTheme = "system";

        let theme = <LayoutTheme>localStorage.getItem(this.themeKey);

        if (theme) {
            this.subject.next(theme);
        } else {
            localStorage.setItem(this.themeKey, defaultTheme);

            this.subject.next(defaultTheme);
        }

        return this.subject.asObservable();
    }

    public setTheme(theme: LayoutTheme): void {
        localStorage.setItem(this.themeKey, theme);

        this.subject.next(theme);
    }
}