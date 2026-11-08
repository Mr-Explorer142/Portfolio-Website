import React from "react";

export const Input = React.forwardRef(({ className = "", type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-input bg-card/60 px-3 py-2 text-sm text-primary placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent transition-colors disabled:cursor-not-allowed disabled:opacity-50 font-mono ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";
