"use client";

import { Locale } from "@root/i18n-config";
import { usePathname } from "next/navigation";
import React from "react";
import { Divider } from "../divider";

export function LocaleSwitch() {
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  return (
    <div className="flex items-end">
      <a
        href={
          pathname.search("pt-BR") === -1
            ? redirectedPathname("pt-BR")
            : undefined
        }
        className="underline text-green-400 font-medium"
      >
        pt
      </a>
      <Divider className="h-3 mx-2" width="w-px" />
      <a
        href={
          pathname.search("en-US") === -1
            ? redirectedPathname("en-US")
            : undefined
        }
        className="underline text-blue-400 font-medium"
      >
        en
      </a>
    </div>
  );
}
