"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { z } from "zod";
import { Heading } from "@/components/ui/heading";
import { BiCode } from "react-icons/bi";
import Button from "@/components/ui/button";
import Loader from "@/components/loader";
import Empty from "@/components/ui/empty";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";
import { UserProfile } from "@clerk/nextjs";
import UserAvatar from "@/components/userAvatar";
import BotAvatar from "@/components/botAvatar";
import ReactMarkdown from "react-markdown";
import axios from "axios";

const page = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/code", {
        messages: newMessages,
      });

      setMessages((value) => [...value, userMessage, response.data]);

      reset();
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="h-full mx-auto max-w-[70rem] lg:p-6">
      <Heading
        title="Code"
        description="Generate code using descriptive text"
        icon={BiCode}
        iconColor="text-green-700"
      />
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <textarea
            {...register("prompt")}
            className="formPrompt"
            placeholder="A simple modal using react context..."
          ></textarea>
          <Button
            className="bg-gradient-to-r from-green-700 to-cyan-500 col-span-12 lg:col-span-3"
            disabled={isSubmitting}
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
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <ReactMarkdown
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-black/10 rounded-lg p-1" {...props} />
                    ),
                  }}
                  className="text-sm overflow-hidden leading-7"
                >
                  {message.content || ""}
                </ReactMarkdown>
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
