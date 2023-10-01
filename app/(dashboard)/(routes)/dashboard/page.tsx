import DashboardRoundNavigation from "@/components/navigation/dashboard-round-navigation";

const DashboardPage = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full h-full scale-75 md:scale-[0.95] xl:scale-[1.15] flex justify-center items-center -mt-10 xl:-mt-5 transition-all">
        <DashboardRoundNavigation />
      </div>
    </div>
  );
};
export default DashboardPage;
