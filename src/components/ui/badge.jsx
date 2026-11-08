import React from "react";

export const Badge = ({ className = "", variant = "default", children, ...props }) => {
  const base = "inline-flex items-center rounded px-2.5 py-0.5 text-xs font-mono font-medium transition-colors select-none";
  
  const variants = {
    default: "border border-border bg-card text-muted-foreground",
    accent: "border border-accent/40 bg-accent/10 text-accent font-semibold",
    outline: "border border-border text-primary",
    cyber: "border border-accent/70 bg-background text-accent shadow-sm",
    success: "border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-mono",
  };

  return (
    <span className={`${base} ${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </span>
  );
};
