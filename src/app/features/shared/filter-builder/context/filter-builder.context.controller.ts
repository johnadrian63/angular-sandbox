import { ContextBuilder } from "../../context-builder";
import { IContextBuilderBaseController } from "../../context-builder/model";

export interface IFilterBuilderContextController extends IContextBuilderBaseController<void> {
    handleClearValue(): void;
}

export class FilterBuilderContextController extends ContextBuilder<IFilterBuilderContextController, void> {
    public clearValue(): void {
        for (const controller of this.controllers) {
            controller.handleClearValue();
        }
    }
}
