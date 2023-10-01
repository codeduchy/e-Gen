"use client";
import { Heading } from "@/components/ui/heading";
import ImageCard from "@/components/ui/imageCard";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { BiImage } from "react-icons/bi";
import { amountOptions, formSchema, resolutionOptions } from "./constants";
import { z } from "zod";
import Button from "@/components/ui/button";
import Empty from "@/components/ui/empty";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader";
import axios from "axios";

const page = () => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setImages([]);
      const response = await axios.post("/api/image", values);
      const urls = response.data.map((image: { url: string }) => image.url);

      setImages(urls);

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
        title="Image"
        description="Generate an image from text"
        iconColor="text-pink-700/90"
        icon={BiImage}
      />
      <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            placeholder="A goose on the moon..."
            className="formPrompt"
            {...register("prompt")}
          ></textarea>
          <select
            defaultValue="amount"
            required
            className="my-2 w-full col-span-6 m-auto h-11 outline-none font-semibold text-slate-600 rounded-lg"
            {...register("amount")}
          >
            <option disabled={true} value="amount">
              Amount
            </option>
            {amountOptions.map((amount) => (
              <option key={amount.label} value={amount.value}>
                {amount.label}
              </option>
            ))}
          </select>
          <select
            defaultValue="resolution"
            required
            className="my-2 w-full col-span-6 m-auto h-11 outline-none font-semibold text-slate-600 rounded-lg"
            {...register("resolution")}
          >
            <option disabled={true} value="resolution">
              Resolution
            </option>
            {resolutionOptions.map((resolution) => (
              <option key={resolution.label} value={resolution.value}>
                {resolution.label}
              </option>
            ))}
          </select>
          <Button className="bg-gradient-to-r from-pink-700/90 to-cyan-500 col-span-12 ">
            Submit
          </Button>
        </form>
        <div>
          {isSubmitting && (
            <div className="p-8 w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {images.length < 1 && !isSubmitting && (
            <div className="md:mt-16 mt-10">
              <Empty label="empty..." />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {images.map((src) => (
              <ImageCard key={src} src={src}>
                <Image src={src} alt="image" fill />
              </ImageCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
