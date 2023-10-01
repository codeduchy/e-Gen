"use client";
import BotAvatar from "@/components/botAvatar";
import Loader from "@/components/loader";
import UserAvatar from "@/components/userAvatar";
import Empty from "@/components/ui/empty";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./constants";
import Button from "@/components/ui/button";
import { z } from "zod";
import axios from "axios";
import { Heading } from "@/components/ui/heading";
import { BsChatDots } from "react-icons/bs";

const page = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: data.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/chat", {
        messages: newMessages,
      });

      setMessages((value) => [...value, userMessage, response.data]);

      reset();
    } catch (error) {
      console.log("BIG: ", error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="h-full mx-auto max-w-[70rem] lg:p-6">
      <Heading
        title="Chat"
        description="Chat with ChatGPT-3.5"
        icon={BsChatDots}
        iconColor="text-violet-500"
      />
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <textarea
            placeholder="Hello there?.."
            {...register("prompt")}
            className="formPrompt"
          />
          <Button
            disabled={isSubmitting}
            className="col-span-12 lg:col-span-3 bg-gradient-to-r from-violet-500 to-cyan-500"
          >
            Submit
          </Button>
        </form>
        <div className="space-y-4 mt-4">
          {isSubmitting && (
            <div className="p-8 w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {messages.length < 1 && !isSubmitting && (
            <div className="md:mt-28 mt-10">
              <Empty label="empty..." />
            </div>
          )}
          <div className="mt-8 flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={`p-4 flex gap-x-3 md:gap-x-8 rounded-lg ${
                  message.role === "user"
                    ? "border border-slate-300"
                    : "bg-slate-200/50"
                }`}
              >
                {message.role === "user" ? (
                  <div>
                    <UserAvatar />{" "}
                  </div>
                ) : (
                  <div>
                    <BotAvatar />
                  </div>
                )}
                <p className="tracking-tight text-sm md:text-base xl:text-xl text-slate-800 font-[500] break-all">
                  {message.content}
                </p>
              </div>
            ))}
          </div>
          <div className="h-10"></div>
        </div>
      </div>
    </div>
  );
};
export default page;
