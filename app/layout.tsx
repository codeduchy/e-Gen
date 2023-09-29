import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

import { Source_Code_Pro } from "next/font/google";
const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eGen",
  description: "AI text,code,video,image,music generation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`h-screen ${source_code_pro.className}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
