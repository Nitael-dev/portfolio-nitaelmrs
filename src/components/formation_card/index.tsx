import React from "react";
import { Board } from "../board";
import Image from "next/image";
import { BaseComponentProps, FormationDataProps } from "@shared/interfaces";
import { Locale } from "@root/i18n-config";

interface FormationCardProps extends BaseComponentProps {
  data: FormationDataProps;
  locale: Locale;
}

export function FormationCard({
  data: { title, content, category, alt, src, content_en },
  className = "",
  locale,
}: FormationCardProps) {
  const localContent = locale === "en-US" ? content_en : content;
  function renderCategories() {
    return category.map((text, key) => (
      <Board
        text={text}
        type="highlight"
        key={`${title.split("-")[0].replaceAll(" ", "")}Category-${key}`}
      />
    ));
  }
  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-start gap-6 px-4 py-2 hover:bg-hover transition-colors rounded-lg ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={256}
        height={256}
        className="w-fit lg:w-auto min-h-18 h-fit"
        priority
      />
      <div className="flex flex-col gap-2">
        <span className="text-(--primary)">{title}</span>
        <h5>{localContent}</h5>
        <div className="flex w-full gap-3 flex-wrap">{renderCategories()}</div>
      </div>
    </div>
  );
}
