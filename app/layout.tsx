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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ProModalProvider>
        <html lang="en">
          <body className="relative">
            <ToasterProvider />
            <ProModal />
            {children}
          </body>
        </html>
      </ProModalProvider>
    </ClerkProvider>
  );
}
