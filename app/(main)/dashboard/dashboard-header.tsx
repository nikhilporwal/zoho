"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function DashboardHeader() {
    return (
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-10 border-b border-border pb-8 gap-4">
            {/* TYPOGRAPHY SECTION */}
            <div className="space-y-1.5">
                <h1 className="text-2xl font-bold text-foreground tracking-tight">
                    Shift Overview
                </h1>
                <p className="text-muted-foreground text-[14px] max-w-2xl font-medium">
                    Real-time status of current operations and guard deployments.
                </p>
            </div>

            {/* SELECT SECTION */}
            <div className="flex flex-col items-start md:items-end gap-2">
                <Select defaultValue="guard-management">
                    <SelectTrigger
                        className="h-10 w-[220px] bg-card border-border rounded-sm text-sm font-semibold shadow-sm focus:ring-2 focus:ring-primary/20 transition-all hover:bg-surface active:scale-[0.98]"
                    >
                        <SelectValue placeholder="Select Management" />
                    </SelectTrigger>

                    <SelectContent
                        className="rounded-sm border-border bg-card shadow-lg p-1 animate-in fade-in-0 zoom-in-95"
                    >
                        <div className="p-1">
                            <SelectItem
                                value="guard-management"
                                className="h-9 px-3 rounded-sm text-sm font-medium cursor-pointer focus:bg-primary focus:text-primary-foreground transition-colors"
                            >
                                Guard Management
                            </SelectItem>

                            <SelectItem
                                value="shift-management"
                                className="h-9 px-3 rounded-sm text-sm font-medium cursor-pointer focus:bg-primary focus:text-primary-foreground transition-colors"
                            >
                                Shift Management
                            </SelectItem>
                        </div>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
