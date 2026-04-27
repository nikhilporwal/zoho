import { DashboardHeader } from "./dashboard-header";

export default async function DashboardLayout({
    children,
    invoice,
    precheck,
    inprogress,
    finished,
    planned,
    arrival,
    created,
    accepted,
    refused,
    abandon,
    approved,
    notapproved,
}: {
    children: React.ReactNode;
    invoice: React.ReactNode;
    precheck: React.ReactNode;
    inprogress: React.ReactNode;
    finished: React.ReactNode
    planned: React.ReactNode
    arrival: React.ReactNode
    created: React.ReactNode
    accepted: React.ReactNode
    refused: React.ReactNode
    abandon: React.ReactNode
    approved: React.ReactNode
    notapproved: React.ReactNode
}) {
    return (
        <div className="min-h-screen">

            {/* Header Section */}
            <DashboardHeader />

            {/* Grid for Slots */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {invoice}
                {precheck}
                {inprogress}
                {finished}
                {planned}
                {arrival}
                {created}
                {accepted}
                {refused}
                {abandon}
                {approved}
                {notapproved}
            </div>

            {/* This renders the children (page.tsx) if needed */}
            <div className="hidden">{children}</div>

        </div>
    )
}
