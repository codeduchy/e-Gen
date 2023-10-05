<<<<<<< HEAD
import Sidebar from "@/components/sidebar";
import UserButton from "@/components/userButton";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative md:grid md:grid-cols-[322px_1fr] h-screen grid-flow-row overflow-hidden">
      <UserButton />
      <Sidebar />
      <main className="w-full transition-all bg-slate-100 p-5 overflow-auto h-screen">
        {children}
=======
import CrispProvider from "@/components/crisp-provider";
import MobileSidebar from "@/components/navigation/mobile-sidebar";
import Sidebar from "@/components/navigation/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { UserButton } from "@clerk/nextjs";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="relative h-screen grid grid-rows-[auto_1fr] md:grid-rows-none md:grid-cols-[auto_1fr] overflow-hidden">
      <CrispProvider />
      <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      <div className="absolute top-5 right-5 scale-[1.3]">
        <UserButton afterSignOutUrl="/" />
      </div>
      <main className="h-full overflow-auto bg-slate-100/70 p-2 pt-5">
        <div className="max-w-5xl mx-auto h-full">{children}</div>
>>>>>>> v-2
      </main>
    </div>
  );
};
<<<<<<< HEAD
export default DashboardLayout;
=======
export default layout;
>>>>>>> v-2
