// actions/auth.ts
"use server";

import { cookies } from "next/headers";
import { apiFetch } from "@/lib/api";

export async function loginAction(formData: any) {
    try {
        const data = await apiFetch<any>("/login", {
            method: "POST",
            body: JSON.stringify(formData),
        });

        const cookieStore = await cookies();

        cookieStore.set("auth_token", data.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
        });

        return { success: true, user: data.user };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}