import MobileSidebar from "@/components/navigation/mobile-sidebar";
import Sidebar from "@/components/navigation/sidebar";
import { UserButton } from "@clerk/nextjs";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen grid grid-rows-[auto_1fr] md:grid-rows-none md:grid-cols-[auto_1fr] overflow-hidden">
      <Sidebar />
      <MobileSidebar />
      <div className="absolute top-5 right-5 scale-[1.3]">
        <UserButton afterSignOutUrl="/" />
      </div>
      <main className="h-full overflow-auto bg-slate-100/70 p-2 pt-5">
        <div className="max-w-5xl mx-auto h-full">{children}</div>
      </main>
    </div>
  );
};
export default layout;
