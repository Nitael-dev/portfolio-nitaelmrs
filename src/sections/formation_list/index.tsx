import { Locale } from "@root/i18n-config";
import { FormationCard } from "@shared/components/formation_card";
import { DictionaryProps } from "@shared/interfaces";
import { Formations } from "@shared/mock/formations";
import React from "react";

interface FormationListProps {
  selected?: string | null;
  dict: DictionaryProps;
}

export function FormationList({ dict, selected }: FormationListProps) {
  return (
    <div
      id="formation-list"
      className={`flex flex-col pb-4.5 pr-4 lg:px-4 gap-4 absolute transition-all duration-500 top-4 lg:top-0 ${
        selected === "formation" ? "z-1" : "-z-1 opacity-0 -translate-y-18"
      }`}
    >
      {Formations.slice(1, 6).map((item, key) => (
        <FormationCard locale={dict.lang as Locale} key={key} data={item} />
      ))}
    </div>
  );
}
