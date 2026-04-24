"use server";

import { apiFetch } from "@/lib/api";
import {
  FetchResponse,
  BaseApiResponse,
  InvoiceData,
  Record,
} from "@/types/dashboard.types";

export async function fetchInvoicesAction(
  page: number,
  search: string = "",
): Promise<FetchResponse<InvoiceData>> {
  const query = encodeURIComponent(search);
  try {
    const data = await apiFetch<BaseApiResponse<InvoiceData>>(
      `/api/v1/invoice/list?page=${page}&search=${query}`,
    );

    return { success: true, data: data.data, pagination: data.pagination };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return { success: false, error: message };
  }
}

export async function fetchPreShiftCheckInAction(
  page: number,
  search: string = "",
): Promise<FetchResponse<Record>> {
  const query = encodeURIComponent(search);
  try {
    const data = await apiFetch<BaseApiResponse<Record>>(
      `/api/v1/shift/list?page=${page}&status=shift_pre_check_in&search=${query}`,
    );

    return { success: true, data: data.data, pagination: data.pagination };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return { success: false, error: message };
  }
}

export async function fetchInProgressShiftAction(
  page: number,
  search: string = "",
): Promise<FetchResponse<Record>> {
  const query = encodeURIComponent(search);
  try {
    const data = await apiFetch<BaseApiResponse<Record>>(
      `/api/v1/shift/list?page=${page}&status=shift_in_progress&search=${query}`,
    );

    return { success: true, data: data.data, pagination: data.pagination };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return { success: false, error: message };
  }
}

export async function fetchFinishedShiftAction(
  page: number,
  search: string = "",
): Promise<FetchResponse<Record>> {
  const query = encodeURIComponent(search);
  try {
    const data = await apiFetch<BaseApiResponse<Record>>(
      `/api/v1/shift/list?page=${page}&status=shift_finished&search=${query}`,
    );

    return { success: true, data: data.data, pagination: data.pagination };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return { success: false, error: message };
  }
}

export async function fetchPlannedShiftAction(
  page: number,
  search: string = "",
): Promise<FetchResponse<Record>> {
  const query = encodeURIComponent(search);
  try {
    const data = await apiFetch<BaseApiResponse<Record>>(
      `/api/v1/shift/list?page=${page}&status=shift_planned&search=${query}`,
    );

    return { success: true, data: data.data, pagination: data.pagination };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return { success: false, error: message };
  }
}

export async function fetchArrivalShiftAction(
  page: number,
  search: string = "",
): Promise<FetchResponse<Record>> {
  const query = encodeURIComponent(search);
  try {
    const data = await apiFetch<BaseApiResponse<Record>>(
      `/api/v1/shift/list?page=${page}&status=shift_arrival&search=${query}`,
    );

    return { success: true, data: data.data, pagination: data.pagination };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return { success: false, error: message };
  }
}

export async function fetchCreatedShiftAction(
  page: number,
  search: string = "",
): Promise<FetchResponse<Record>> {
  const query = encodeURIComponent(search);
  try {
    const data = await apiFetch<BaseApiResponse<Record>>(
      `/api/v1/shift/list?page=${page}&status=shift_created&search=${query}`,
    );

    return { success: true, data: data.data, pagination: data.pagination };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return { success: false, error: message };
  }
}

export async function fetchAcceptedShiftAction(
  page: number,
  search: string = "",
): Promise<FetchResponse<Record>> {
  const query = encodeURIComponent(search);
  try {
    const data = await apiFetch<BaseApiResponse<Record>>(
      `/api/v1/shift/list?page=${page}&status=shift_accepted&search=${query}`,
    );

    return { success: true, data: data.data, pagination: data.pagination };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return { success: false, error: message };
  }
}

export async function fetchRefusedShiftAction(
  page: number,
  search: string = "",
): Promise<FetchResponse<Record>> {
  const query = encodeURIComponent(search);
  try {
    const data = await apiFetch<BaseApiResponse<Record>>(
      `/api/v1/shift/list?page=${page}&status=shift_refused&search=${query}`,
    );

    return { success: true, data: data.data, pagination: data.pagination };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return { success: false, error: message };
  }
}

export async function fetchAbandonShiftAction(
  page: number,
  search: string = "",
): Promise<FetchResponse<Record>> {
  const query = encodeURIComponent(search);
  try {
    const data = await apiFetch<BaseApiResponse<Record>>(
      `/api/v1/shift/list?page=${page}&status=shift_abandon&search=${query}`,
    );

    return { success: true, data: data.data, pagination: data.pagination };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return { success: false, error: message };
  }
}

export async function fetchApprovedShiftAction(
  page: number,
  search: string = "",
): Promise<FetchResponse<Record>> {
  const query = encodeURIComponent(search);
  try {
    const data = await apiFetch<BaseApiResponse<Record>>(
      `/api/v1/shift/list?page=${page}&status=shift_approved&search=${query}`,
    );

    return { success: true, data: data.data, pagination: data.pagination };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return { success: false, error: message };
  }
}

export async function fetchNotApprovedShiftAction(
  page: number,
  search: string = "",
): Promise<FetchResponse<Record>> {
  const query = encodeURIComponent(search);
  try {
    const data = await apiFetch<BaseApiResponse<Record>>(
      `/api/v1/shift/list?page=${page}&status=shift_not_approved&search=${query}`,
    );

    return { success: true, data: data.data, pagination: data.pagination };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    return { success: false, error: message };
  }
}
