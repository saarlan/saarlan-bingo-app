export type TableOptions<T> = {
  name: string;
  endpoint: string;
  headers: TableHeader[];
  defaultItemsPerPage?: number;
  defaultSort?: any[];
  include?: any;
  where?: any;
};

export type TableEvents = {
  tableRefresh: void;
  tableUpdateItemCount?: number;
  tableUpdateFilter?: any;
};

export type TableHeader = {
  readonly key?: 'data-table-group' | 'data-table-select' | 'data-table-expand' | string;
  readonly title?: string;
  readonly fixed?: boolean;
  readonly align?: 'center' | 'end' | 'start';
  readonly width?: string | number;
  readonly hideable?: boolean;
  readonly minWidth?: string;
  readonly maxWidth?: string;
  readonly headerProps?: {
    readonly [x: string]: any;
  };

  readonly sortable?: boolean;
  readonly children?: readonly {
    readonly key?: 'data-table-group' | 'data-table-select' | 'data-table-expand' | string;
    readonly title?: string;
    readonly fixed?: boolean;
    readonly align?: 'center' | 'end' | 'start';
    readonly width?: string | number;
    readonly minWidth?: string;
    readonly maxWidth?: string;
    readonly headerProps?: {
      readonly [x: string]: any;
    };

    readonly sortable?: boolean;
    readonly children?: readonly any[];
  }[];
};
