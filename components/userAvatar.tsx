"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const serAvatar = () => {
  const { user } = useUser();

  return (
    <div className="h-12 w-12 relative rounded-full">
      <Image
        src={user?.imageUrl ? user.imageUrl : "/darkSpinner.png"}
        alt="user"
        width={48}
        height={48}
        className="rounded-full max-w-[3rem] max-h-[3rem]"
      />
    </div>
  );
};
export default serAvatar;
