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
          <button
            className="w-fit rounded-full overflow-hidden font-semibold bg-white py-2 px-3 text-lg hover:scale-[1.01]"
            color="bg-white"
          >
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
};
export default LandingNavbar;
