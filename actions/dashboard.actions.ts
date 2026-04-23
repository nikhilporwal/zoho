"use server";

import { apiFetch } from "@/lib/api";
import { InvoiceApiResponse } from "@/types/dashboard.types";

export async function fetchInvoicesAction(page: number, search: string = "") {
    try {
        const data = await apiFetch<InvoiceApiResponse>(`/api/v1/invoice/list?page=${page}&search=${search}`);

        return { success: true, data: data.data, pagination: data.pagination };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}