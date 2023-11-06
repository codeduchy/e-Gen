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
    disabled: false,
  },
  {
    label: "Chat",
    icon: BsChatDots,
    href: "/chat",
    color: "text-violet-500/90",
    disabled: false,
  },
  {
    label: "Image",
    icon: BiImage,
    href: "/image",
    color: "text-pink-700/90",
    disabled: false,
  },
  {
    label: "Video",
    icon: BiCameraMovie,
    href: "/video",
    color: "text-orange-700/90",
    disabled: true,
  },
  {
    label: "Music",
    icon: FiMusic,
    href: "/music",
    color: "text-emerald-500/90",
    disabled: true,
  },
  {
    label: "Code",
    icon: BiCode,
    href: "/code",
    color: "text-green-700/90",
    disabled: false,
  },
  {
    label: "Settings",
    icon: LuSettings,
    href: "/settings",
    color: "text-slate-500/90",
  },
];
