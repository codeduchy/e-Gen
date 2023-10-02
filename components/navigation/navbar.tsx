"use client";
import { routes } from "@/utils/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavProps = {
  theme: string;
};

const Navbar = ({ theme, ...attributes }: NavProps) => {
  const path = usePathname();

  return (
    <div {...attributes}>
      <nav className="text-lg">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.label}
            className={`${
              theme === "dark"
                ? "text-white  hover:bg-white/10 mt-2 rounded-lg hover:pl-4"
                : "text-black"
            } 
            ${
              path == route.href
                ? "bg-white/10 pl-4 md:pl-4"
                : "bg-white/[0.05]"
            } transition-all flex items-center p-3 md:p-2`}
          >
            {<route.icon className={`${route.color} mr-2 h-8 w-8`} />}
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default Navbar;
