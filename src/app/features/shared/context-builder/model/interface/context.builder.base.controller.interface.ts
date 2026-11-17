import { IContextBuilderController } from "./context.builder.controller.interface";

export interface IContextBuilderBaseController<T> extends IContextBuilderController {
    contextLoading?(loading: boolean): void;
}
