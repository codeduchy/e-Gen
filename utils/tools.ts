import { FiMusic } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { BiImage, BiCode, BiCameraMovie } from "react-icons/bi";

export const tools = [
  {
    label: "Conversation",
    icon: BsChatDots,
    color: "text-violet-500",
  },
  {
    label: "Music Generation",
    icon: FiMusic,
    color: "text-emerald-500",
  },
  {
    label: "Image Generation",
    icon: BiImage,
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: BiCameraMovie,
    color: "text-orange-700",
  },
  {
    label: "Code Generation",
    icon: BiCode,
    color: "text-green-700",
  },
];
