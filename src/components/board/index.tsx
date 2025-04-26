import { BaseComponentProps } from "@shared/interfaces";
import React from "react";

interface BoardProps extends BaseComponentProps {
  text: string;
  type: "content" | "article" | "highlight";
}

export function Board({ text, type, className = "" }: BoardProps) {
  function renderType() {
    switch (type) {
      case "article":
        return <article>{text}</article>;
      case "content":
        return <span>{text}</span>;
      case "highlight":
        return <h4>{text}</h4>;
    }
  }
  return (
    <div
      className={`${
        type !== "highlight" ? "pt-2 pb-4" : "py-2"
      } px-4 mt-2 rounded-lg bg-foreground ${
        type === "content" ? "shadow-(--shadow-board)" : className
      }`}
    >
      {renderType()}
    </div>
  );
}
