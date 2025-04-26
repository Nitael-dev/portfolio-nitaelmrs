import { Locale } from "@root/i18n-config";

export interface BaseComponentProps {
  className?: string;
}

export interface DictionaryProps {
  lang: string;
  subtitle: string;
  label: {
    about: string;
    formation: string;
    experience: string;
  };
  about: {
    footer_title: string;
    main_section: string;
    footer_section: string;
  };
  experience: {
    footer_title: string;
    footer_content: string;
  };
}

export interface FormationDataProps {
  src: string;
  alt: string;
  title: string;
  content: string;
  content_en: string;
  category: string[];
}

export interface ExperienceProps {
  time: {
    [K in Locale]: {
      startTime: string;
      endTime: string;
    };
  };
  title: string;
  content: string;
  content_en: string;
}
