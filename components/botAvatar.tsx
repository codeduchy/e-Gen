import { BsChatDots } from "react-icons/bs";
// import Image from "next/image";

const BotAvatar = () => {
  return (
    <div className="h-12 w-12 relative px-2">
      <BsChatDots className="text-violet-500/80 w-11 h-11" />
      {/* <Image
        src="/bot.png"
        alt="bot"
        width={48}
        height={48}
        className="rounded-full max-w-[3rem] max-h-[3rem]"
      /> */}
    </div>
  );
};
export default BotAvatar;
