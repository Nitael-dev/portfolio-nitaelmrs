"use client";
import { AnchorSelection } from "@shared/components/anchor_selection";
import { Divider } from "@shared/components/divider";
import { FormationCard } from "@shared/components/formation_card";
import { Experiences, Formations } from "@shared/mock/formations";
import { About } from "@shared/sections/about";
import { Knowledge } from "@shared/sections/knowledge";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Locale } from "@root/i18n-config";
import { getDictionary } from "@shared/hooks/get_dictionary";
import { DictionaryProps } from "@shared/interfaces";
import { ExperienceCard } from "@shared/components/experience_card";
import { FormationList } from "@shared/sections/formation_list";
import { ExperienceList } from "@shared/sections/experience_list";
import { StickyCard } from "@shared/components/sticky_card";

export default function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const _dict = useMemo(async () => {
    const { lang } = await params;
    return getDictionary(lang);
  }, [params]);

  const [selected, setSelected] = useState<string | undefined | null>("");
  const [dict, setDict] = useState<DictionaryProps | undefined>();

  const [showScroll, setShowScroll] = useState<boolean | null>(null);

  function handleSelected(index?: string | null) {
    if (index === undefined) {
      setTimeout(() => setSelected(null), 1);
      setSelected(undefined);
    } else {
      setTimeout(() => setSelected(index), 1);
      switch (index) {
        case "about":
          setShowScroll(false);
          window.document
            .getElementById("about-article")!
            .classList.remove("hidden");
          break;
        case "formation":
          setShowScroll(false);
          window.document
            .getElementById("formation-list")!
            .classList.remove("hidden");
          break;
        case "experience":
          setShowScroll(false);
          window.document
            .getElementById("experience-list")!
            .classList.remove("hidden");
          break;

        default:
          window.document
            .getElementById("about-article")!
            .classList.remove("hidden");
          window.document
            .getElementById("experience-list")!
            .classList.remove("hidden");
          window.document
            .getElementById("formation-list")!
            .classList.remove("hidden");
          break;
      }

      setTimeout(() => {
        switch (index) {
          case "about":
            setShowScroll(true);
            window.document
              .getElementById("formation-list")!
              .classList.add("hidden");
            window.document
              .getElementById("experience-list")!
              .classList.add("hidden");
            break;
          case "formation":
            setShowScroll(true);
            window.document
              .getElementById("about-article")!
              .classList.add("hidden");
            window.document
              .getElementById("experience-list")!
              .classList.add("hidden");
            break;
          case "experience":
            setShowScroll(true);
            window.document
              .getElementById("about-article")!
              .classList.add("hidden");
            window.document
              .getElementById("formation-list")!
              .classList.add("hidden");
            break;

          default:
            setShowScroll(null);
            break;
        }
      }, 500);
    }
  }

  useEffect(() => {
    if (selected === "") return;
    if (selected === undefined || selected === null) {
      if (
        !window.document.getElementById("formation-list") ||
        !window.document.getElementById("experience-list")
      ) {
        handleSelected(undefined);
      } else {
        const anchor = window.location.hash.split("#")[1];
        handleSelected(anchor ?? null);
      }
    }
  }, [selected]);

  useLayoutEffect(() => {
    async function fetchDict() {
      setDict(await _dict);
    }
    fetchDict();
    if (typeof window !== "undefined") {
      setSelected(undefined);
    }
  }, [_dict]);

  if (!dict) return;

  return (
    <>
      <Divider width={"w-px"} className={`absolute h-full hidden lg:block`} />
      <h3 className="self-start w-fit mx-auto lg:mx-0 lg:w-[32.5%] my-2 px-12 md:px-0">
        {dict?.subtitle}
      </h3>
      <main
        className={`flex flex-col lg:flex-row px-4 sm:px-0 ${
          showScroll === null || !selected
            ? "overflow-y-hidden overflow_opacity lg:overflow-y-hidden"
            : showScroll === false
            ? "overflow_opacity lg:overflow-y-hidden"
            : "overflow-y-none"
        } w-full h-fit justify-between`}
      >
        <section
          className={`flex flex-col lg:w-full lg:h-full relative lg:mb-8`}
        >
          <Divider width="w-full lg:w-[65%]" />
          <AnchorSelection
            dict={dict}
            className="flex flex-col items-center lg:items-start gap-5 my-14"
            setSelected={handleSelected}
            selected={selected!}
          />
          <Divider
            width={selected ? "w-full lg:w-[65%]" : "w-0"}
            className={`transition-[width]`}
          />
          <Knowledge
            title={dict.about.footer_title}
            content=" · Stacks: Git(GitHub, GitLab, BitBucket), Docker, JavaScript,
              TypeScript, Tailwind, Bootstrap, ReactJS, React Native, NextJS,
              NodeJS, Flutter, Dart, Jest, Cypress, CI/CD, PostgreSQL, MySQL,
              GraphQL, Apollo Client, Redux."
            className={`transition-all duration-500 mt-14 ${
              selected === "about"
                ? "z-1"
                : "-z-10 opacity-0 -translate-y-18 lg:translate-x-18 lg:translate-y-0"
            }`}
          />
          <div
            className={`flex h-fit w-full absolute top-[18rem] mx-auto lg:mx-0 lg:w-[85%] transition-all duration-500 ${
              selected === "formation"
                ? "z-1"
                : "-z-10 opacity-0 -translate-y-18 lg:translate-y-0 lg:translate-x-18"
            }`}
          >
            {Formations.slice(0, 1).map((item, key) => (
              <FormationCard
                locale={dict.lang as Locale}
                key={key}
                data={item}
              />
            ))}
          </div>
          <Knowledge
            title={dict.experience.footer_title}
            content={dict.experience.footer_content}
            className={`transition-all mt-14 duration-500 absolute top-[15rem] ${
              selected === "experience"
                ? "z-1"
                : "-z-10 opacity-0 -translate-y-18 lg:translate-x-18 lg:translate-y-0"
            }`}
          />
        </section>
        <section
          className={`flex flex-col w-full overflow-y-none ${
            !showScroll || !selected ? "overflow_opacity" : ""
          } ${
            selected === "about" ? "lg:overflow-y-none" : "lg:overflow-y-scroll"
          } h-full items-start lg:items-end relative`}
        >
          {selected !== "" && (
            <>
              <About
                dict={dict}
                className={`absolute top-2 lg:top-0 transition-all duration-500 pb-8 lg:pb-0 lg:ml-4 ${
                  selected === "about"
                    ? "z-1"
                    : "-z-1 opacity-0 -translate-y-18"
                }`}
              />
              <>
                <StickyCard
                  show={selected === "formation"}
                  className="w-(--sticky-formation) self-start hidden top-0 -mt-3.5 lg:mx-4 xl:block"
                >
                  <FormationCard
                    locale={dict.lang as Locale}
                    data={Formations[1]}
                  />
                </StickyCard>
                <FormationList dict={dict} selected={selected} />
              </>
              <>
                <StickyCard
                  show={selected === "experience"}
                  className="w-(--sticky-formation) self-start hidden top-0 -mt-3.5 lg:mx-4 xl:block"
                >
                  <ExperienceCard
                    locale={dict.lang as Locale}
                    data={Experiences[0]}
                  />
                </StickyCard>
                <ExperienceList dict={dict} selected={selected} />
              </>
            </>
          )}
        </section>
      </main>
    </>
  );
}
