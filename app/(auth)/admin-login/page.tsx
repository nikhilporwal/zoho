"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "@/actions/auth.actions";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    const [isPending, startTransition] = useTransition();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState<string>("admin@gmail.com");
    const [password, setPassword] = useState<string>("Admin@123");
    const router = useRouter();

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        startTransition(async () => {
            const result = await loginAction({ email, password });
            if (result.success) {
                toast.success("Login Successful");
                router.refresh();
                router.push("/dashboard");
            } else {
                toast.error(result.error || "Invalid Credentials");
            }
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-card shadow-xl rounded-2xl overflow-hidden border border-border">

                {/* LEFT: IMAGE SECTION */}
                <div className="hidden md:flex flex-col items-center justify-center p-12 bg-muted/30">
                    <div className="relative w-full aspect-square max-w-[350px]">
                        <Image
                            src="/images/website-logo.png"
                            alt="Login Illustration"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* RIGHT: FORM SECTION */}
                <div className="flex items-center justify-center p-6 sm:p-12">
                    <Card className="w-full border-none shadow-none">

                        {/* Centered Header for both Mobile & Desktop */}
                        <CardHeader className="space-y-2 text-center">
                            <CardTitle className="text-2xl font-bold tracking-tight">
                                Welcome Back 👋
                            </CardTitle>
                            <CardDescription>
                                Enter your credentials to access your dashboard
                            </CardDescription>
                        </CardHeader>

                        <form onSubmit={handleSubmit}>
                            <CardContent className="space-y-4 pt-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@company.com"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={isPending}
                                        className="h-11"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <div className="relative">
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            disabled={isPending}
                                            className="h-11 pr-10" // Extra padding for the icon
                                        />
                                        {/* Password Toggle Button */}
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                            disabled={isPending}
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="flex flex-col gap-4 mt-2">
                                <Button
                                    className="w-full h-11 text-base font-medium transition-all active:scale-[0.98]"
                                    type="submit"
                                    disabled={isPending}
                                >
                                    {isPending ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Authenticating...
                                        </>
                                    ) : (
                                        "Log In"
                                    )}
                                </Button>

                                <div className="text-sm text-center text-muted-foreground">
                                    New here?{" "}
                                    <Link href="/register" className="text-primary font-medium hover:underline underline-offset-4">
                                        Create an account
                                    </Link>
                                </div>
                            </CardFooter>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
}
