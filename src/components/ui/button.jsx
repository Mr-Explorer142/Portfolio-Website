import React from "react";

export const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "default", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variants = {
      default:
        "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow-accent",
      accent:
        "bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-glow-accent font-bold",
      outline:
        "border border-border bg-transparent text-primary hover:bg-card hover:border-accent hover:text-accent",
      ghost:
        "text-muted-foreground hover:text-primary hover:bg-card/60",
      secondary:
        "bg-secondary/20 text-secondary-foreground border border-border hover:border-accent/60 hover:bg-secondary/30",
      cyber:
        "border border-accent text-accent bg-accent/10 hover:bg-accent hover:text-accent-foreground hover:shadow-glow-accent",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-8 px-3 text-[11px]",
      lg: "h-12 px-6 text-sm",
      icon: "h-9 w-9",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
