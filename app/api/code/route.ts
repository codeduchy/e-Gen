<<<<<<< HEAD
import { formSchema } from "@/app/(dashboard)/(routes)/code/constants";
=======
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
>>>>>>> v-2
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const initMessage: ChatCompletionMessageParam = {
  role: "system",
  content:
    "You are a code generator,You must answer only in markdown code snippets. Use code comments for explanations.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

<<<<<<< HEAD
    const notValid = formSchema.safeParse(messages);
    if (notValid.success) {
      return new NextResponse("Validation error", { status: 500 });
    }
=======
>>>>>>> v-2
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
<<<<<<< HEAD
      return new NextResponse("OpenAI API key not configured", { status: 500 });
=======
      return new NextResponse("OpenAI API key not configured", {
        status: 500,
      });
>>>>>>> v-2
    }
    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

<<<<<<< HEAD
=======
    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired", { status: 403 });
    }

>>>>>>> v-2
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [initMessage, ...messages],
    });

<<<<<<< HEAD
    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CODE ERROR]: ", error);
=======
    if (!isPro) await increaseApiLimit();

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CODE API ERROR]: ", error);
>>>>>>> v-2
    return new NextResponse("Internal error", { status: 500 });
  }
}
