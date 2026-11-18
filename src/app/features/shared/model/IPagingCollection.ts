import { PageSizeOptions } from "../table-builder/service/table.builder.pagination.base.service";

export interface IPagingCollection<T> {
    collection: T[];
    paging: IPaging;
}

export interface IPaging {
    page: number;
    pageSize: PageSizeOptions;
    count: number;
}
