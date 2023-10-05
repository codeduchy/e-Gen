<<<<<<< HEAD
const page = () => {
  return <div>page</div>;
};
export default page;
=======
"use client";
import Loader from "@/components/page/loader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { musicSchema } from "./constants";
import { z } from "zod";
import Heading from "@/components/page/heading";
import { FiMusic } from "react-icons/fi";
import Form from "@/components/forms/form";
import Input from "@/components/forms/input";
import Button from "@/components/button";
import Empty from "@/components/page/empty";
import axios from "axios";
import { ProModalContext } from "@/context/pro-modal-provider";
import toast from "react-hot-toast";

const MusicPage = () => {
  const router = useRouter();
  const [music, setMusic] = useState<string>();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof musicSchema>>({
    resolver: zodResolver(musicSchema),
  });

  const { setIsOpen } = useContext(ProModalContext);

  const onSubmit = async (value: z.infer<typeof musicSchema>) => {
    try {
      setMusic(undefined);

      const response = await axios.post("/api/music", value);
      console.log(response);

      setMusic(response.data.audio);
    } catch (error: any) {
      toast.error("Something went wrong");
      if (error?.response?.status === 403) {
        setIsOpen(true);
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title={"Music"}
        description={"Generate music from text"}
        icon={FiMusic}
        color={"text-emerald-500"}
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          className={"col-span-full lg:col-span-9"}
          register={{ ...register("prompt") }}
          placeholder="Drum solo"
        />
        <Button
          disabled={isSubmitting}
          className=" col-span-full lg:col-span-3"
        >
          Submit
        </Button>
      </Form>
      <div>
        {isSubmitting && <Loader />}
        {!music && !isSubmitting && <Empty label="no music generated..." />}
        {music && (
          <audio controls className="w-full mt-8">
            <source src={music} />
          </audio>
        )}
      </div>
    </div>
  );
};
export default MusicPage;
>>>>>>> v-2
