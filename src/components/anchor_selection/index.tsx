import { BaseComponentProps, DictionaryProps } from "@shared/interfaces";
import React from "react";

interface AnchorSelectionProps extends BaseComponentProps {
  selected: string;
  setSelected(index: string): void;
  dict: DictionaryProps;
}

export function AnchorSelection({
  selected,
  setSelected,
  className = "",
  dict,
}: AnchorSelectionProps) {
  return (
    <div className={className}>
      <a
        href="#about"
        onClick={() => setSelected("about")}
        className={`group flex items-center gap-2 leading-7 transition-[color] w-fit ${
          selected === "about"
            ? "font-semibold text-primary"
            : "text-tertiary hover:font-semibold hover:text-primary"
        }`}
      >
        <div
          className={`h-px transition-[width] ${
            selected === "about"
              ? "w-18 bg-primary"
              : "w-9 bg-tertiary group-hover:w-18 group-hover:bg-primary"
          }`}
        />
        {dict.label.about}
      </a>
      <a
        href="#formation"
        onClick={() => setSelected("formation")}
        className={`group flex items-center gap-2 leading-7 transition-[color] w-fit ${
          selected === "formation"
            ? "font-semibold text-primary"
            : "text-tertiary hover:font-semibold hover:text-primary"
        }`}
      >
        <div
          className={`h-px transition-[width] ${
            selected === "formation"
              ? "w-18 bg-primary"
              : "w-9 bg-tertiary group-hover:w-18 group-hover:bg-primary"
          }`}
        />
        {dict.label.formation}
      </a>
      <a
        href="#experience"
        onClick={() => setSelected("experience")}
        className={`group flex items-center gap-2 leading-7 transition-[color] w-fit ${
          selected === "experience"
            ? "font-semibold text-primary"
            : "text-tertiary hover:font-semibold hover:text-primary"
        }`}
      >
        <div
          className={`h-px transition-[width] ${
            selected === "experience"
              ? "w-18 bg-primary"
              : "w-9 bg-tertiary group-hover:w-18 group-hover:bg-primary"
          }`}
        />
        {dict.label.experience}
      </a>
    </div>
  );
}
