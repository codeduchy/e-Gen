import Image from "next/image";

const BotAvatar = ({ bgColor }: { bgColor?: string }) => {
  return (
    <div className="shrink-0 w-12 h-12">
      <Image
        src="/bot.png"
        width={100}
        height={100}
        alt="bot avatar"
        className={`${
          bgColor ? bgColor : "bg-slate-200/50"
        } rounded-full border border-slate-300`}
      />
    </div>
  );
};
export default BotAvatar;
