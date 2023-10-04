"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import Button from "@/components/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-3 bg-transparent justify-between flex items-center">
      <div className="text-white h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="h-16 w-16"
          />
        </Link>
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            className="w-fit rounded-full overflow-hidden"
            color="bg-gradient-to-r from-violet-700 to-red-500 text-white"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
export default LandingNavbar;
