import { codeSchema } from "@/app/(dashboard)/(routes)/code/constants";
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

    if (!codeSchema.safeParse(messages).success) {
      return new NextResponse("Messages format error", { status: 400 });
    }
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("OpenAI API key not configured", {
        status: 500,
      });
    }
    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const stream = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [initMessage, ...messages],
    });

    return NextResponse.json(stream.choices[0].message);
  } catch (error) {
    console.log("[CODE API ERROR]: ", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
