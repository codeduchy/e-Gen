import { routes } from "@/utils/routes";
import Link from "next/link";

export const NavMenu = ({ theme }: { theme: "light" | "dark" }) => {
  return (
    <div className="max-w-lg mx-auto w-full flex flex-col items-center px-5">
      {routes.map((route) => (
        <Link
          key={route.label}
          href={route.href}
          className={`flex gap-2 items-center  mt-3 transition-all cursor-pointer rounded-md p-3 md:p-2 w-full hover:scale-[1.03] hover:pl-7 z-10 text-md font-medium ${
            theme === "dark"
              ? "text-white bg-white/[0.05] hover:bg-white/[0.1]"
              : "text-black  bg-white/70 hover:bg-white p-4 text-lg"
          }`}
        >
          <route.icon className={`text-2xl sm:text-3xl ${route.color}`} />
          {route.label}
        </Link>
      ))}
    </div>
  );
};
