import type { Metadata } from "next";
import "./styles/globals.css";
import { ReactNode } from "react";
import { Roboto } from "next/font/google";
import ReactQueryClient from "@/core/providers/ReactQueryClient";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Starter | home",
  description: "Starter boilerplate with Next.js, Tailwind CSS, TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-gray-600`}>
        <header>
          <link
            rel="icon"
            href="/favicon.png?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
        </header>
        <ReactQueryClient>{children}</ReactQueryClient>
      </body>
    </html>
  );
}
