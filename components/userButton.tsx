import { UserButton as User } from "@clerk/nextjs";

const UserButton = () => {
  return (
    <div className="z-20 absolute top-4 right-8 hover:scale-[1.05]">
      <User afterSignOutUrl="/" />
    </div>
  );
};
export default UserButton;
