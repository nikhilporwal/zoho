export type InvoiceData = {
    id: string;
    invoice_no: string;
    customer_name: string;
    status: string;
    created_at: string;
};

export type Pagination = {
    page: number;
    limit: number;
    total: number;
    total_pages: number;
};

export type InvoiceApiResponse = {
    success: boolean;
    data: InvoiceData[];
    pagination: Pagination;
};