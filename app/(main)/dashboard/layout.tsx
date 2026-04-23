import { DashboardHeader } from "./dashboard-header";

export default async function DashboardLayout({
    children,
    invoice,
}: {
    children: React.ReactNode;
    invoice: React.ReactNode;
}) {
    return (
        <div className="min-h-screen">

            {/* Header Section */}
            <DashboardHeader />

            {/* Grid for Slots */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {invoice}
            </div>

            {/* This renders the children (page.tsx) if needed */}
            <div className="hidden">{children}</div>

        </div>
    )
}