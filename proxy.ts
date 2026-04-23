import { auth } from "@/lib/auth";

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const { nextUrl } = req;

    const isAuthPage = nextUrl.pathname.startsWith("/admin-login");
    const isDashboardPage = nextUrl.pathname.startsWith("/dashboard");
    const hasError = req.auth?.error === "RefreshAccessTokenError";

    if (hasError) {
        if (isDashboardPage) {
            return Response.redirect(new URL("/admin-login", nextUrl));
        }
        return;
    }

    if (isAuthPage && isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
    }

    if (!isLoggedIn && isDashboardPage) {
        return Response.redirect(new URL("/admin-login", nextUrl));
    }
});