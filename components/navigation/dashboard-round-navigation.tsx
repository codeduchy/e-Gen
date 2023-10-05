import { FiMusic } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import { RiDashboardLine } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import { BiImage, BiCode, BiCameraMovie, BiHomeAlt } from "react-icons/bi";
import Link from "next/link";

const DashboardRoundNavigation = () => {
  return (
    <div className={`relative circleWrapper transition-all`}>
      <h1 className="absolute top-[39%] text-4xl left-[4%] text-slate-500/60 font-medium text-center">
        Explore the <span className="text-3xl inline-block">power of AI</span>
      </h1>
      <Link href="/dashboard" className="circle deg270">
        {" "}
        <RiDashboardLine className="cursor-pointer transition-all hover:text-9xl m-auto text-8xl text-sky-500" />
      </Link>
      <Link href="/chat" className="cursor-pointer circle deg315 deg45 ">
        <BsChatDots className="transition-all hover:text-9xl m-auto text-8xl text-violet-500" />
      </Link>
      <Link href="/image" className="circle deg0">
        <BiImage className=" cursor-pointer transition-all hover:text-9xl m-auto text-8xl  text-pink-700" />
      </Link>
      <Link href="/settings" className="circle deg45">
        {" "}
        <LuSettings className="cursor-pointer transition-all hover:text-9xl m-auto text-8xl text-slate-500" />
      </Link>
      <Link href="/code" className="circle deg135">
        {" "}
        <BiCode className="cursor-pointer transition-all hover:text-9xl m-auto text-8xl text-green-700" />
      </Link>
      <Link href="/music" className="circle deg180">
        {" "}
        <FiMusic className="cursor-pointer transition-all hover:text-9xl m-auto text-8xl text-emerald-500" />
      </Link>
      <Link href="/video" className="circle deg225">
        {" "}
        <BiCameraMovie className="cursor-pointer transition-all hover:text-9xl m-auto text-8xl text-orange-700" />
      </Link>
      <Link href="/" className="circle deg90">
        {" "}
        <BiHomeAlt className="cursor-pointer transition-all hover:text-9xl m-auto text-8xl" />
      </Link>
    </div>
  );
};
export default DashboardRoundNavigation;
