export type PaginatedMeta = {
  page: number;
  pageCount: number;
  perPage: number;
  itemCount: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export type Paginated<T> = {
  items: T[];
  meta: PaginatedMeta;
};
