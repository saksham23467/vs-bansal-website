import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-royal-100 text-royal-800 dark:bg-royal-900/40 dark:text-royal-200",
        navy: "bg-navy-100 text-navy-800 dark:bg-navy-800 dark:text-navy-200",
        success: "bg-emerald-100 text-emerald-800",
        outline: "border border-navy-200 text-navy-700",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
