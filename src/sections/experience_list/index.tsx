import { Locale } from "@root/i18n-config";
import { ExperienceCard } from "@shared/components/experience_card";
import { DictionaryProps } from "@shared/interfaces";
import { Experiences } from "@shared/mock";
import React from "react";

interface ExperienceListProps {
  selected?: string | null;
  dict: DictionaryProps;
}

export function ExperienceList({ dict, selected }: ExperienceListProps) {
  return (
    <div
      id="experience-list"
      className={`flex flex-col justify-center pb-4 lg:px-4 gap-4 absolute top-0 transition-all duration-500 ${
        selected === "experience" ? "z-1" : "-z-1 opacity-0 -translate-y-18"
      }`}
    >
      {Experiences.map((item, key) => (
        <ExperienceCard
          className="lg:bg-transparent"
          locale={dict.lang as Locale}
          key={key}
          data={item}
        />
      ))}
    </div>
  );
}
