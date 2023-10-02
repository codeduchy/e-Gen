"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const UserAvatar = () => {
  const { user } = useUser();

  return (
    <div className="shrink-0 w-12 h-12">
      {user?.imageUrl ? (
        <Image
          src={user?.imageUrl}
          width={100}
          height={100}
          alt="user avatar"
          className="rounded-full border border-slate-300 shrink-0"
        />
      ) : (
        <Image
          src="/user.png"
          width={100}
          height={100}
          alt="user avatar"
          className="rounded-full border border-slate-300"
        />
      )}
    </div>
  );
};
export default UserAvatar;
