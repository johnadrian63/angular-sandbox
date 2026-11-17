export enum SortOrder {
    ASC = "ASC",
    DESC = "DESC",
}

export interface ITableBuilderSorter {
    columnKey: string;
    order: SortOrder;
}
