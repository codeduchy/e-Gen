import { NavMenu } from "@/components/navMenu";
import { RoundDashboard } from "@/components/roundDashboard";
import { routes } from "@/utils/routes";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen w-full overflow-auto flex justify-center md:pt-16">
      <div className="mt-5 md:hidden min-w-[90%] overflow-auto">
        <NavMenu theme="light" />
      </div>
      <div className="hidden md:block">
        <RoundDashboard />
      </div>
    </div>
  );
};
export default page;
