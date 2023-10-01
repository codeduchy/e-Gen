import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-8 h-8 relative animate-spin">
        <Image src="/lightSpinner.png" height={32} width={32} alt="logo" />
      </div>
      <p className="text-sm text-slate-500/60 ">eGen is processing...</p>
    </div>
  );
};
export default Loader;
