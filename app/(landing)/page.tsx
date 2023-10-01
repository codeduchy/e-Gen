import Button from "@/components/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      Landing Page
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;
