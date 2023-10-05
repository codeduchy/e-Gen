<<<<<<< HEAD
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
=======
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ProModalProvider from "@/context/pro-modal-provider";
import { useContext } from "react";
import ProModal from "@/components/pro-modal";
import CrispProvider from "@/components/crisp-provider";
import { ToasterProvider } from "@/components/toaster-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eGen",
  description: "All in one AI generation",
>>>>>>> v-2
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
<<<<<<< HEAD
      <html lang="en">
        <body className={`h-screen ${source_code_pro.className}`}>
          {children}
        </body>
      </html>
=======
      <ProModalProvider>
        <html lang="en">
          <body className="relative">
            <ToasterProvider />
            <ProModal />
            {children}
          </body>
        </html>
      </ProModalProvider>
>>>>>>> v-2
    </ClerkProvider>
  );
}
