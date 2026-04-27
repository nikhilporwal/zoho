import { TableColumn } from "@/types/table.types";
import { InvoiceData } from "@/types/dashboard.types";
import { getStatusBadgeClass } from "@/lib/utils";

export const invoiceTableColumns: TableColumn<InvoiceData>[] = [
    {
        key: "invoice_no",
        header: "#",
        width: "80px",
        align: "center",
        render: (row) => (
            <span className="text-[13px] text-foreground font-medium uppercase " >
                {row.invoice_no}
            </span>
        ),
    },
    {
        key: "customer_name",
        header: "Name",
        align: "center",
        render: (row) => (
            <span className="text-[13px] font-bold text-foreground capitalize" >
                {row.customer_name} {row.invoice_no}
            </span>
        ),
    },
    {
        key: "created_at",
        header: "Date",
        width: "130px",
        align: "center",
        render: (row) => (
            <span className="text-[13px] text-foreground" >
                {
                    new Date(row.created_at).toLocaleDateString("en-US", {
                        month: "short", day: "numeric", year: "numeric",
                    })
                }
            </span>
        ),
    },
    {
        key: "status",
        header: "Status",
        width: "100px",
        align: "center",
        render: (row) => (
            <span
                className={`font-bold px-3 py-1.5
                    ${getStatusBadgeClass(row.status)}
                `}
            >
                {row.status}
            </span>
        ),
    },
];
