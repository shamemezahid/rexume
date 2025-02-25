import React from "react";
import "./globals.css";

import { Noto_Sans } from "next/font/google";
import { AccessibilityProvider } from "@/components/context/AccessibilityContext";

const font = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description:
    "My Portfolio",
};

export const Head = () => {
  return (
    <head>
      <link rel="icon" href="/favicon.ico" />
    </head>
  );
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="bg-gradient-to-br from-primary-50/25 via-lime-50/25 to-neutral-50 dark:from-primary-950/30 dark:via-primary-950/20 dark:to-neutral-950"
    >
      <Head />
      <AccessibilityProvider>
        <body className={font.className}>{children}</body>
      </AccessibilityProvider>
    </html>
  );
}
