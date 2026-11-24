import { PageSizeOptions } from "../ui/paginator/ui.paginator.component";

export interface IPagingCollection<T> {
    collection: T[];
    paging: IPaging;
}

export interface IPaging {
    page: number;
    pageSize: PageSizeOptions;
    count: number;
}
