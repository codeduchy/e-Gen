import { UserButton as User } from "@clerk/nextjs";

const UserButton = () => {
  return (
    <div className="z-20 absolute top-4 scale-125 right-8 hover:scale-[1.35] lg:scale-150 lg:hover:scale-[1.60]">
      <User afterSignOutUrl="/" />
    </div>
  );
};
export default UserButton;
