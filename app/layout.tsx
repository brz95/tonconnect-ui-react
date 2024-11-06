import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TonProvider } from "@/app/src/layout/ton-provider";
import { QueryProvider } from "@/app/src/layout/query-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Делаем IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="./icon.png" type="image/png" sizes="32x32" />
      </head>
      <TonProvider>
        <QueryProvider>
          <body className={`${inter.className} antialiased h-dvh p-6`}>
            {children}
          </body>
        </QueryProvider>
      </TonProvider>
    </html>
  );
}
