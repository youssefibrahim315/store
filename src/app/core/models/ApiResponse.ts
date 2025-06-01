export interface IResponse <T>  extends IPagination{
  data?: T;
}

export interface IPagination {
  currentPage?: number;
  itemsPerPage?: number;
  totalPages?: number;
  totalCount?: number;
}
