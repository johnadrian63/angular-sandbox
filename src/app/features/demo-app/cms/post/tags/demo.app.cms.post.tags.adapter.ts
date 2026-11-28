import { ITableBuilderRowData } from "../../../../shared/table-builder";
import { ITag } from "../../../../shared/external-api/dummyjson/model/tag.model";

export interface IPostTagAdapter extends ITableBuilderRowData, ITag { }

export class PostTagAdapter implements IPostTagAdapter {

    public get rowId(): string | number {
        return this.data.name;
    }

    public get slug(): string {
        return this.data.slug;
    }

    public get name(): string {
        return this.data.name;
    }

    public get url(): string {
        return this.data.url;
    }

    constructor(private readonly data: ITag) { }
}