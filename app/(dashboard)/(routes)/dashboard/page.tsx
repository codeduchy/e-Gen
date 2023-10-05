<<<<<<< HEAD
import { NavMenu } from "@/components/navMenu";
import { RoundDashboard } from "@/components/roundDashboard";
import { routes } from "@/utils/routes";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center md:pt-16 lg:pt-24">
      <div className="mt-5 md:hidden min-w-[90%] min-h-[36rem]">
        <NavMenu theme="light" />
      </div>
      <div className="hidden md:block">
        <RoundDashboard />
=======
import DashboardRoundNavigation from "@/components/navigation/dashboard-round-navigation";

const DashboardPage = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full h-full scale-75 md:scale-[0.95] xl:scale-[1.15] flex justify-center items-center -mt-10 xl:-mt-5 transition-all">
        <DashboardRoundNavigation />
>>>>>>> v-2
      </div>
    </div>
  );
};
<<<<<<< HEAD
export default page;
=======
export default DashboardPage;
>>>>>>> v-2
