import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-[120px] w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 shadow-sm placeholder:text-navy-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-navy-700 dark:bg-navy-900 dark:text-white",
      className
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
