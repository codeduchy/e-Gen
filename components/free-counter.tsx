"use client";
import { MAX_FREE_COUNTS } from "@/utils/constants";
import Progress from "./progress";
import Button from "./button";
import { BsLightningChargeFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { ProModalContext } from "@/context/pro-modal-provider";

const FreeCounter = ({
  apiLimitCount = 0,
  className,
  isPro = false,
}: {
  apiLimitCount: number | undefined;
  className?: string;
  isPro: boolean;
}) => {
  const { setOpen } = useContext(ProModalContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  let width = "w-0";
  if (apiLimitCount === 1) {
    width = "w-1/5";
  } else if (apiLimitCount === 2) {
    width = "w-2/5";
  } else if (apiLimitCount === 3) {
    width = "w-3/5";
  } else if (apiLimitCount === 4) {
    width = "w-4/5";
  } else if (apiLimitCount === 5) {
    width = "w-full";
  } else {
    width = "w-0";
  }

  if (isPro) {
    return null;
  }

  return (
    <div className={className}>
      <div className="relative flex flex-col w-full gap-3 p-3 py-4">
        <p className="text-center -mb-1">
          {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
        </p>
        <Progress
          width={width}
          value={apiLimitCount}
          color="bg-gradient-to-r from-violet-700 to-red-500"
          className="h-4"
        />
        <Button
          color="bg-gradient-to-r from-violet-700 to-red-500"
          onClick={setOpen}
        >
          Upgrade <BsLightningChargeFill className="ml-1 text-white" />
        </Button>
      </div>
    </div>
  );
};
export default FreeCounter;
