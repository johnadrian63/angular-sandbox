import {
    Injectable,
    Provider,
    ViewContainerRef
} from "@angular/core";

import {
    IModalBuilderConfig,
    IModalBuilderHandlerRef
} from "./handler/modal.builder.handler.interface";
import { ModalBuilderHandlerService } from "./handler/modal.builder.handler.service";
import { ModalBuilderComponent } from "./modal.builder.component";

export interface IModalBuilderService {
    config: IModalBuilderConfig;

    handleModalHeader(headerVcr: ViewContainerRef): void;
    handleModalBody(bodyVcr: ViewContainerRef): void;
    handleModalFooter(footerVcr: ViewContainerRef): void;
    handleBeforeClosed(): void;
    handleAfterClosed(): void;
    handleSubmit(): void;
}

@Injectable()
export abstract class ModalBuilderService implements IModalBuilderService {

    public get config(): IModalBuilderConfig {
        return {};
    }

    public get bodyClass(): string {
        return "";
    }

    // FIXME refactor this!
    private modalBuilderHandlerRef!: IModalBuilderHandlerRef;

    constructor(
        protected readonly modalBuilderHandlerService: ModalBuilderHandlerService
    ) { }

    public abstract handleModalHeader(headerVcr: ViewContainerRef): void;
    public abstract handleModalBody(bodyVcr: ViewContainerRef): void;
    public abstract handleModalFooter(footerVcr: ViewContainerRef): void;
    public abstract handleBeforeClosed(): void;
    public abstract handleAfterClosed(): void;
    public abstract handleSubmit(): Promise<void>;

    public open(): IModalBuilderHandlerRef {
        const config: IModalBuilderConfig = {
            ...this.config
        };

        const defaultProviders: Provider[] = [
            {
                provide: ModalBuilderService,
                useValue: this
            }
        ];

        config.providers = [
            ...config.providers ?? [],
            ...defaultProviders
        ];

        this.modalBuilderHandlerRef = this.modalBuilderHandlerService.open(ModalBuilderComponent, config);

        const beforeClosed = this.modalBuilderHandlerRef.onBeforeClosed()
            .subscribe(() => {
                this.handleBeforeClosed();

                beforeClosed.unsubscribe();
            });

        const afterClosed = this.modalBuilderHandlerRef.onAfterClosed()
            .subscribe(() => {
                this.handleAfterClosed();

                afterClosed.unsubscribe();
            });

        return this.modalBuilderHandlerRef;
    }

    public close(): void {
        this.modalBuilderHandlerRef.close();
    }
}
