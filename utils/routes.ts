import { FiMusic } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import { RiDashboardLine } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import { BiImage, BiCode, BiCameraMovie } from "react-icons/bi";

export const routes = [
  {
    label: "Dashboard",
    icon: RiDashboardLine,
    href: "/dashboard",
    color: "text-sky-500/90",
  },
  {
    label: "Chat",
    icon: BsChatDots,
    href: "/chat",
    color: "text-violet-500/90",
  },
  {
    label: "Image",
    icon: BiImage,
    href: "/image",
    color: "text-pink-700/90",
  },
  {
    label: "Video",
    icon: BiCameraMovie,
    href: "/video",
    color: "text-orange-700/90",
  },
  {
    label: "Music",
    icon: FiMusic,
    href: "/music",
    color: "text-emerald-500/90",
  },
  {
    label: "Code",
    icon: BiCode,
    href: "/code",
    color: "text-green-700/90",
  },
  {
    label: "Settings",
    icon: LuSettings,
    href: "/settings",
    color: "text-slate-500/90",
  },
];
