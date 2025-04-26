import { Locale } from "@root/i18n-config";
import { BaseComponentProps, ExperienceProps } from "@shared/interfaces";
import React from "react";

interface ExperienceCardProps extends BaseComponentProps {
  data: ExperienceProps;
  locale: Locale;
}

export function ExperienceCard({
  className = "",
  locale,
  data: { time, title, content, content_en },
}: ExperienceCardProps) {
  const localContent =
    locale === "en-US"
      ? {
          content: content_en,
          startTime: time["en-US"].startTime,
          endTime: time["en-US"].endTime,
        }
      : {
          content,
          startTime: time["pt-BR"].startTime,
          endTime: time["pt-BR"].endTime,
        };

  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 px-4 py-2 hover:bg-hover bg-(--background) lg:bg-transparent w-full transition-colors rounded-lg ${className}`}
    >
      <div className="flex gap-2 items-center h-fit pt-1">
        <time>{localContent.startTime}</time>
        <div className="w-6 h-px bg-tertiary" />
        <time>{localContent.endTime}</time>
      </div>
      <div className="flex flex-col gap-2">
        <span>{title}</span>
        <h5>{localContent.content}</h5>
      </div>
    </div>
  );
}
