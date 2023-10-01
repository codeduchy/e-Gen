import MobileSidebar from "@/components/navigation/mobile-sidebar";
import Sidebar from "@/components/navigation/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen grid grid-rows-[auto_1fr] md:grid-rows-none md:grid-cols-[auto_1fr] overflow-hidden">
      <Sidebar />
      <MobileSidebar />
      <main className="overflow-auto bg-slate-100 p-2 pt-5">
        <div className="max-w-7xl mx-auto h-full">{children}</div>
      </main>
    </div>
  );
};
export default layout;
