import React from "react";

interface DividerProps {
  width?: string;
  className?: string;
}

export function Divider({ width = "", className = "" }: DividerProps) {
  return (
    <div
      className={`${
        !width ? "w-screen" : width
      } min-h-px bg-primary ${className}`}
    />
  );
}
