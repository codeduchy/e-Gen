"use client";
import BotAvatar from "@/components/page/bot-avatar";
import Empty from "@/components/page/empty";
import Heading from "@/components/page/heading";
import UserAvatar from "@/components/page/user-avatar";
import { useForm } from "react-hook-form";
import { BsChatDots } from "react-icons/bs";
import { chatSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@/components/forms/input";
import Form from "@/components/forms/form";
import Button from "@/components/button";
import Loader from "@/components/page/loader";
import { useState } from "react";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";
import axios from "axios";
import { useRouter } from "next/navigation";

const ChatPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof chatSchema>>({
    resolver: zodResolver(chatSchema),
  });

  console.log(errors);

  const onSubmit = async (values: z.infer<typeof chatSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/chat", {
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
    <div>
      <Heading
        icon={BsChatDots}
        color="text-violet-500/90"
        title="Chat"
        description="Chat with ChatGPT-3.5"
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="What is the wingspan of a fully grown golden eagle?..."
          className="col-span-full lg:col-span-9"
          register={{ ...register("prompt") }}
          required
        />
        <Button
          className="lg:col-span-3 col-span-12"
          color="bg-gradient-to-r from-violet-500 to-cyan-500 text-white"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </Form>
      <div>
        {isSubmitting && <Loader />}
        {messages.length === 0 && !isSubmitting && (
          <Empty label="No conversation initiated..." />
        )}
        <div className="flex flex-col-reverse gap-y-4 mt-8 p-2">
          {messages.map((message) => (
            <div
              key={message.content}
              className={`flex p-6 lg:p-8 gap-x-6 lg:gap-x-8 rounded-lg ${
                message.role === "user"
                  ? " border border-slate-200"
                  : "bg-slate-200/80"
              }`}
            >
              {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
              <p className="break-all">{message.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ChatPage;
