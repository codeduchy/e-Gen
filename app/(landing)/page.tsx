import Link from "next/link";
import { auth } from "@clerk/nextjs";
import Button from "@/components/ui/button";

const Landing = () => {
  const { userId } = auth();

  return (
    <main className="bg-slate-900 h-screen flex justify-center items-center text-white flex-col space-y-2 ">
      <h1 className="font-bold text-3xl">Landing</h1>
      <div className="space-x-3 text-lg">
        <Link href={userId ? "/dashboard " : "/sign-in"}>
          <Button>{userId ? "Dashboard " : "Sign In"}</Button>
        </Link>
        {!userId && (
          <Link href="/sign-up">
            <Button>Register</Button>
          </Link>
        )}
      </div>
    </main>
  );
};
export default Landing;
