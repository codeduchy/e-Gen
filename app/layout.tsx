import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ProModalProvider, { ProModal } from "@/context/pro-modal-provider";
import { useContext } from "react";
import Modal from "@/components/modal";

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
            <Modal />
            {children}
          </body>
        </html>
      </ProModalProvider>
    </ClerkProvider>
  );
}
