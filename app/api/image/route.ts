import { imageSchema } from "@/app/(dashboard)/(routes)/image/constants";
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    console.log(imageSchema.safeParse({ prompt, amount, resolution }));

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!imageSchema.safeParse({ prompt, amount, resolution }).success) {
      return new NextResponse("Unreliable prompt provided", { status: 400 });
    }
    if (!openai.apiKey) {
      return new NextResponse("OpenAI API key not configured", {
        status: 500,
      });
    }
    if (!amount || !prompt || !resolution) {
      return new NextResponse("Full prompt is required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse("Free trial has expired", { status: 403 });
    }

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    await increaseApiLimit();

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[IMAGE API ERROR]: ", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
