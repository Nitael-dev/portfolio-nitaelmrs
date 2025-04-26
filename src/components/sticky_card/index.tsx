import { BaseComponentProps } from "@shared/interfaces";
import React from "react";

interface StickyCardProps extends BaseComponentProps {
  show: boolean;
  children: React.ReactNode;
}

export function StickyCard({ show, className, children }: StickyCardProps) {
  return (
    <div
      className={`bg-(--background) sticky transition-all duration-500 ${
        show ? "order-1 z-1" : "order-2 opacity-0 -translate-y-18 -z-1"
      } ${className}`}
    >
      {children}
    </div>
  );
}
