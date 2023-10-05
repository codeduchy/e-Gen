<<<<<<< HEAD
=======
import { musicSchema } from "@/app/(dashboard)/(routes)/music/constants";
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
>>>>>>> v-2
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
<<<<<<< HEAD
=======

    if (!musicSchema.safeParse({ prompt }).success) {
      return new NextResponse("Bad prompt provided", { status: 400 });
    }
>>>>>>> v-2
    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

<<<<<<< HEAD
=======
    const isPro = await checkSubscription();
    const freeTrial = await checkApiLimit();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired", { status: 403 });
    }

>>>>>>> v-2
    const response = await replicate.run(
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          prompt_a: prompt,
        },
      }
    );

<<<<<<< HEAD
=======
    if (!isPro) await increaseApiLimit();

>>>>>>> v-2
    return NextResponse.json(response);
  } catch (error) {
    console.log("[MUSIC ERROR]: ", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
