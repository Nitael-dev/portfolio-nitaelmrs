import { Board } from "@shared/components/board";
import { BaseComponentProps, DictionaryProps } from "@shared/interfaces";
import React from "react";

interface AboutProps extends BaseComponentProps {
  dict: DictionaryProps;
}

export function About({ className = "", dict }: AboutProps) {
  return (
    <div id="about-article" className={className}>
      <Board
        type="article"
        className="shadow-(--shadow-main-board)"
        text={dict.about.main_section}
      />
      <Board
        type="article"
        className="shadow-(--shadow-footer-board)"
        text={dict.about.footer_section}
      />
    </div>
  );
}
