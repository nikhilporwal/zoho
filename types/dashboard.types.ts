export type InvoiceData = {
  id: string;
  invoice_no: string;
  customer_name: string;
  status: string;
  created_at: string;
};

export type Record = {
  id: string;
  invoice_no: string;
  shift_no: number;
  customer_name: string;
  status: string;
  start_time: string;
};

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  total_pages: number;
};

export type BaseApiResponse<T> = {
  data: T[];
  pagination: Pagination;
};

export type FetchResponse<T> =
  | {
      success: true;
      data: T[];
      pagination: Pagination;
    }
  | {
      success: false;
      error: string;
    };
