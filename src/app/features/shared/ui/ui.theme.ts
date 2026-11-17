export namespace Ui {
    export enum Theme {
        DEFAULT = "DEFAULT",
        DEFAULT_INVERTED = "DEFAULT_INVERTED",
        SUCCESS = "SUCCESS",
        SUCCESS_INVERTED = "SUCCESS_INVERTED",
        WARNING = "WARNING",
        WARNING_INVERTED = "WARNING_INVERTED",
        INFO = "INFO",
        INFO_INVERTED = "INFO_INVERTED",
        DANGER = "DANGER",
        DANGER_INVERTED = "DANGER_INVERTED",
        WHITE = "WHITE",
        WHITE_INVERTED = "WHITE_INVERTED",
        LIGHT = "LIGHT",
        LIGHT_INVERTED = "LIGHT_INVERTED",
        DARK = "DARK",
        DARK_INVERTED = "DARK_INVERTED",
    };

    export const theme: typeof Ui.Theme = Ui.Theme;

    export const notificationClassMapper: Map<Theme, string> = new Map<Theme, string>([
        [Theme.DEFAULT, "ui-notification-default"],
        [Theme.SUCCESS, "ui-notification-success"],
        [Theme.INFO, "ui-notification-info"],
        [Theme.WARNING, "ui-notification-warning"],
        [Theme.DANGER, "ui-notification-danger"],
        [Theme.LIGHT, "ui-notification-white"],
        [Theme.WHITE, "ui-notification-light"],
        [Theme.DARK, "ui-notification-dark"]
    ]);

    export const alertClassMapper: Map<keyof typeof Theme, string> = new Map<keyof typeof Theme, string>([
        [Theme.DEFAULT, "ui-alert-default"],
        [Theme.SUCCESS, "ui-alert-success"],
        [Theme.INFO, "ui-alert-info"],
        [Theme.WARNING, "ui-alert-warning"],
        [Theme.DANGER, "ui-alert-danger"],
        [Theme.WHITE, "ui-alert-white"],
        [Theme.WHITE, "ui-alert-light"],
        [Theme.DARK, "ui-alert-dark"]
    ]);

    export const iconMapper: Map<keyof typeof Theme, string> = new Map<Theme, string>([
        [Theme.DEFAULT, ""],
        [Theme.SUCCESS, "fa-solid fa-check"],
        [Theme.INFO, "fa-solid fa-circle-info"],
        [Theme.WARNING, "fa-solid fa-triangle-exclamation"],
        [Theme.DANGER, "fa-solid fa-exclamation"],
        [Theme.WHITE, ""],
        [Theme.LIGHT, ""],
        [Theme.DARK, ""],
    ]);

    export const buttonClassMapper: Map<keyof typeof Theme, string> = new Map<keyof typeof Theme, string>([
        [Theme.DEFAULT, "ui-button-default"],
        [Theme.SUCCESS, "ui-button-success"],
        [Theme.INFO, "ui-button-info"],
        [Theme.WARNING, "ui-button-warning"],
        [Theme.DANGER, "ui-button-danger"],
        [Theme.WHITE, "ui-button-white"],
        [Theme.LIGHT, "ui-button-light"],
        [Theme.DARK, "ui-button-dark"]
    ]);

    export const linkClassMapper: Map<keyof typeof Theme, string> = new Map<keyof typeof Theme, string>([
        [Theme.DEFAULT, "ui-link-default"],
        [Theme.SUCCESS, "ui-link-success"],
        [Theme.INFO, "ui-link-info"],
        [Theme.WARNING, "ui-link-warning"],
        [Theme.DANGER, "ui-link-danger"],
        [Theme.WHITE, "ui-link-white"],
        [Theme.LIGHT, "ui-link-light"],
        [Theme.DARK, "ui-link-dark"]
    ]);

    export const badgeClassMapper: Map<keyof typeof Theme, string> = new Map<keyof typeof Theme, string>([
        [Theme.DEFAULT, "ui-badge-default"],
        [Theme.DEFAULT_INVERTED, "ui-badge-default-inverted"],
        [Theme.SUCCESS, "ui-badge-success"],
        [Theme.SUCCESS_INVERTED, "ui-badge-success-inverted"],
        [Theme.INFO, "ui-badge-info"],
        [Theme.INFO_INVERTED, "ui-badge-info-inverted"],
        [Theme.WARNING, "ui-badge-warning"],
        [Theme.WARNING_INVERTED, "ui-badge-warning-inverted"],
        [Theme.DANGER, "ui-badge-danger"],
        [Theme.DANGER_INVERTED, "ui-badge-danger-inverted"],
        [Theme.WHITE, "ui-badge-white"],
        [Theme.WHITE_INVERTED, "ui-badge-white-inverted"],
        [Theme.WHITE, "ui-badge-light"],
        [Theme.WHITE_INVERTED, "ui-badge-light-inverted"],
        [Theme.DARK, "ui-badge-dark"],
        [Theme.DARK_INVERTED, "ui-badge-dark-inverted"]
    ]);
}
