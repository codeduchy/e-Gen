import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
<<<<<<< HEAD
  publicRoutes: ["/"],
=======
  publicRoutes: ["/", "/api/webhook"],
>>>>>>> v-2
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
