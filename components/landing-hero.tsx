"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="h-full flex flex-col gap-8 items-center justify-center">
      <div className="text-transparent bg-clip-text text-5xl md:text-6xl xl:text-7xl py-2 bg-gradient-to-r from-violet-500 to-red-500 -mt-40 font-semibold">
        <TypewriterComponent
          options={{
            strings: [
              "Chatbot AI.",
              "Photo AI.",
              "Music AI.",
              "Code AI.",
              "Image AI.",
              "Video AI.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
        <button className="text-white font-semibold text-2xl py-3 px-7 rounded-full bg-gradient-to-r from-violet-700 to-red-500">
          Get Started
        </button>
      </Link>
    </div>
  );
};
export default LandingHero;
