import Image from "next/image";

interface EmptyProps {
  label?: string;
}

const Empty = ({ label = "" }: EmptyProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div>
        <div className="relative w-52 h-52 md:h-72 md:w-72  ">
          <Image
            src="/empty.svg"
            alt="empty"
            height={288}
            width={288}
            className="w-52 h-52 md:h-72 md:w-72 opacity-[0.95]"
          />
        </div>
        <p className="text-slate-500/60 text-md xl:text-lg mt-2">{label}</p>
      </div>
    </div>
  );
};
export default Empty;
