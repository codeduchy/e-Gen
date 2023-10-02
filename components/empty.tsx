import Image from "next/image";

const Empty = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col items-center p-16">
      <div className=" h-52 md:h-64 xl:h-72 transition-all 2xl:h-80">
        <Image
          src="/empty.svg"
          alt="empty"
          width={320}
          height={320}
          className="opacity-[0.95] h-full w-full"
        />
      </div>
      <p className="-ml-5 p-1 text-slate-500">{label}</p>
    </div>
  );
};
export default Empty;
