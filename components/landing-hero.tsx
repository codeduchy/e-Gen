"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="h-full flex justify-center">
      <div className="flex flex-col items-center justify-center -mt-24 gap-4">
        <h1 className="text-white text-5xl text-center font-bold">
          AI generation encapsulated
        </h1>
        <div className="text-transparent bg-clip-text text-5xl md:text-6xl xl:text-7xl py-3 bg-gradient-to-r from-violet-500 to-red-500 font-semibold ">
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
          <button className="text-white font-semibold text-2xl py-3 px-7 rounded-full bg-gradient-to-r from-violet-700 to-red-500 hover:scale-[1.01]">
            Get Started For Free
          </button>
        </Link>
      </div>
    </div>
  );
};
export default LandingHero;
