import { apiFetch } from "@/lib/api";
import Invoice from "./invoice";
import { InvoiceApiResponse } from "@/types/dashboard.types";

export default async function InvoicePage() {
    const response = await apiFetch<InvoiceApiResponse>("/api/v1/invoice/list?page=1");

    return <Invoice initialData={response.data} pagination={response.pagination} />;
}