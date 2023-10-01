import Sidebar from "@/components/sidebar";
import UserButton from "@/components/userButton";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative md:grid md:grid-cols-[322px_1fr] h-screen grid-flow-row overflow-hidden">
      <UserButton />
      <Sidebar />
      <main className="w-full transition-all bg-slate-100 p-5 overflow-auto h-screen">
        {children}
      </main>
    </div>
  );
};
export default DashboardLayout;
