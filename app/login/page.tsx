// app/login/page.tsx
"use client";

import { useState, useTransition } from "react";
import { loginAction } from "@/actions/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
    const [isPending, startTransition] = useTransition();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();

        startTransition(async () => {
            const result = await loginAction({ email, password });

            if (result.success) {
                toast.success("Welcome back!");
                router.push("/dashboard");
            } else {
                toast.error(result.error || "Login failed");
            }
        });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            // app/login/page.tsx (Snippet)
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Email Address"
                    type="email"
                    placeholder="name@company.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <Input
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <Button
                    type="submit"
                    isLoading={isPending}
                    className="w-full mt-2"
                >
                    Sign In
                </Button>
            </form>
        </div>
    );
}