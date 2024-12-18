import type { Metadata } from "next";
import localFont from "next/font/local";

import { Toaster } from "@abroad/ui";
import { cn } from "@abroad/ui/libs";
import "@abroad/tailwind-config/themes/violet.css";

import Header from "#/components/layouts/Header";
import Main from "#/components/layouts/Main";
import Footer from "#/components/layouts/Footer";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

// export const metadata: Metadata = getSharedMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head></head>

      <body
        className={cn(
          `${pretendard.variable} font-pretendard`,
          "flex min-h-screen flex-col",
        )}
      >
        <Toaster
          position="top-center"
          theme="light"
          richColors
          closeButton
          toastOptions={{
            classNames: {
              title: "whitespace-pre-line",
              description: "whitespace-pre-line",
            },
          }}
        />

        {/* <Header /> */}
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
