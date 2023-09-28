import Sidebar from "@/components/sidebar";
import UserButton from "@/components/userButton";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative md:grid md:grid-cols-[322px_1fr] grid-flow-row h-screen overflow-hidden">
      <UserButton /> <Sidebar />
      <main className="bg-slate-100 h-full">{children}</main>
    </div>
  );
};
export default DashboardLayout;
