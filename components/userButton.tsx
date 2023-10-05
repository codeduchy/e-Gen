import { UserButton as User } from "@clerk/nextjs";

const UserButton = () => {
  return (
    <div className="z-[500] absolute top-4 scale-[1.3] right-4 ">
      <User afterSignOutUrl="/" />
    </div>
  );
};
export default UserButton;
