import type { Metadata } from "next";
import { Grenze } from "next/font/google";
import { i18n, type Locale } from "@root/i18n-config";
import "../globals.css";
import Image from "next/image";
import { Divider } from "@shared/components/divider";
import { LocaleSwitch } from "@shared/components/locale_switch";

const geistGrenze = Grenze({
  variable: "--font-grenze",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nitael Morais",
  description: "Nitael.mrs - portfolio",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: Locale }>;
  }>
) {
  const params = await props.params;

  const { children } = props;
  return (
    <html lang={params.lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Grenze:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistGrenze.variable} antialiased`}>
        <div className="flex flex-col w-screen h-screen font-[family-name:var(--font-grenze)]">
          <header className="flex flex-col lg:flex-row w-full py-2 px-12 lg:px-18 items-center justify-between">
            <h1>Nitael K. A. Morais | Mid Front-end Developer</h1>
            <Divider className="my-2 lg:hidden" />
            <div className="flex h-full items-center lg:pr-8">
              <Divider className="h-full mx-8 hidden lg:block" width="w-px" />
              <div className="flex gap-4">
                <a
                  target="_blank"
                  href="https://www.figma.com/design/aG2AANq5hma2NJugeVCSus/Portifolio?m=auto&t=m7f1hTPcpp72WqRr-1"
                >
                  <Image
                    src="/figma.svg"
                    alt="Figma logo"
                    width={32}
                    height={32}
                    className="min-w-8 min-h-8"
                    priority
                  />
                </a>
                <a target="_blank" href="https://github.com/Nitael-dev">
                  <Image
                    src="/github.svg"
                    alt="Github logo"
                    width={32}
                    height={32}
                    className="min-w-8 min-h-8"
                    priority
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/nitaelmorais/"
                >
                  <Image
                    src="/linkedin.svg"
                    alt="Linkedin logo"
                    width={32}
                    height={32}
                    className="min-w-8 min-h-8"
                    priority
                  />
                </a>
              </div>
              <Divider className="h-full mx-8" width="w-px" />
              <LocaleSwitch />
            </div>
          </header>
          <Divider />
          <div className="flex flex-col overflow-y-auto sm:px-12 lg:px-18 w-full h-full items-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
