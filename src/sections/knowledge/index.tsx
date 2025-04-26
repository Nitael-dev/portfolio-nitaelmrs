import { Board } from "@shared/components/board";
import { BaseComponentProps } from "@shared/interfaces";
import React from "react";

interface KnowledgeProps extends BaseComponentProps {
  title: string;
  content: string;
}

export function Knowledge({ className = "", content, title }: KnowledgeProps) {
  return (
    <footer className={`flex flex-col w-full lg:w-[75%] ${className}`}>
      <h2 className="ml-4">{title}</h2>
      <Board type="content" text={content} />
    </footer>
  );
}
