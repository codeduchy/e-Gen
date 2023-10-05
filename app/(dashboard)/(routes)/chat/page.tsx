"use client";
<<<<<<< HEAD
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
=======
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
import { useContext, useState } from "react";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import Progress from "@/components/progress";
import { ProModalContext } from "@/context/pro-modal-provider";
import toast from "react-hot-toast";

const ChatPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

  const { setIsOpen } = useContext(ProModalContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof chatSchema>>({
    resolver: zodResolver(chatSchema),
  });

  const onSubmit = async (values: z.infer<typeof chatSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
      };

>>>>>>> v-2
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/chat", {
        messages: newMessages,
      });

      setMessages((value) => [...value, userMessage, response.data]);

      reset();
<<<<<<< HEAD
    } catch (error) {
      console.log("BIG: ", error);
=======
    } catch (error: any) {
      toast.error("Something went wrong");
      if (error?.response?.status === 403) {
        setIsOpen(true);
      }
>>>>>>> v-2
    } finally {
      router.refresh();
    }
  };

  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> v-2
        </div>
      </div>
    </div>
  );
};
<<<<<<< HEAD
export default page;
=======
export default ChatPage;
>>>>>>> v-2
