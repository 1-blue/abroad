import type { Metadata } from "next";
import localFont from "next/font/local";

import { Toaster } from "@abroad/ui";
import { cn } from "@abroad/ui/libs";
import "@abroad/tailwind-config/themes.css";

import TanstackQueryProvider from "#/providers/TanstackQueryProvider";

import Header from "#/components/layouts/Header";
import Main from "#/components/layouts/Main";
import Footer from "#/components/layouts/Footer";
import { getSharedMetadata } from "#/lib/sharedMetadata";

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
  const theme = process.env.NEXT_PUBLIC_THEME || "zinc";

  return (
    <html lang="ko" data-theme={theme}>
      <head></head>

      <body
        className={cn(
          `${pretendard.variable} font-pretendard`,
          "flex min-h-screen flex-col",
        )}
      >
        <TanstackQueryProvider>
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

          <Header />
          <Main>{children}</Main>
          <Footer />
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
