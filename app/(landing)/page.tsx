import LandingHero from "@/components/landing-hero";
import LandingNavbar from "@/components/navigation/landing-navbar";

const LandingPage = () => {
  return (
    <div className=" h-screen w-screen bg-gradient-to-br from-slate-950 to-slate-800 flex flex-col">
      {/* <LandingNavbar /> */}
      <LandingHero />
    </div>
  );
};
export default LandingPage;
