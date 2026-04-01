import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = ({ label, error, className, ...props }: InputProps) => {
    return (
        <div className="w-full space-y-1.5">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            <input
                className={cn(
                    "w-full px-3 py-2 border rounded-md outline-none transition-all focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 disabled:bg-gray-100",
                    error ? "border-red-500" : "border-gray-300",
                    className
                )}
                {...props}
            />
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
};