import Button from "@/components/button";
import LandingHero from "@/components/landing-hero";
import LandingNavbar from "@/components/navigation/landing-navbar";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className=" h-screen w-screen bg-gradient-to-br from-slate-900 to-cyan-950 flex flex-col">
      <LandingNavbar />
      <LandingHero />
    </div>
  );
};
export default LandingPage;
