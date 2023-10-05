"use client";
<<<<<<< HEAD
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
=======
import Button from "@/components/button";
import Form from "@/components/forms/form";
import Heading from "@/components/page/heading";
import Input from "@/components/forms/input";
import Select from "@/components/forms/select";
import { BiImage } from "react-icons/bi";
import { amountOptions, imageSchema, resolutionOptions } from "./constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import axios from "axios";
import Loader from "@/components/page/loader";
import Empty from "@/components/page/empty";
import Image from "next/image";
import ImageCard from "@/components/page/image-card";
import { ProModalContext } from "@/context/pro-modal-provider";
import toast from "react-hot-toast";

const ImagePage = () => {
>>>>>>> v-2
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const {
    handleSubmit,
<<<<<<< HEAD
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
=======
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof imageSchema>>({
    resolver: zodResolver(imageSchema),
  });

  const { setIsOpen } = useContext(ProModalContext);

  const onSubmit = async (values: z.infer<typeof imageSchema>) => {
    try {
      setImages([]);
      const response = await axios.post("/api/image", values);

>>>>>>> v-2
      const urls = response.data.map((image: { url: string }) => image.url);

      setImages(urls);

      reset();
<<<<<<< HEAD
    } catch (error) {
      console.log(error);
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
=======
    <div>
      <Heading
        title="Image"
        icon={BiImage}
        description="Generate image from text"
        color="text-pink-700"
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Moon's reflection on a lake at midnight..."
          className=" col-span-full lg:col-span-9"
          register={{ ...register("prompt") }}
          required
        />
        <Select
          defaultValue="Amount"
          className="col-span-6 h-10"
          register={{ ...register("amount") }}
          required
        >
          {amountOptions.map((amount) => (
            <option key={amount.label} value={amount.value}>
              {amount.label}
            </option>
          ))}
        </Select>
        <Select
          defaultValue="Resolution"
          className="col-span-6 h-10"
          register={{ ...register("resolution") }}
          required
        >
          {resolutionOptions.map((resolution) => (
            <option key={resolution.label} value={resolution.value}>
              {resolution.label}
            </option>
          ))}
        </Select>
        <Button
          className="col-span-full"
          color="bg-gradient-to-r from-pink-700 to-cyan-500 text-white"
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </Form>
      <div>
        {isSubmitting && <Loader />}
        {images.length === 0 && !isSubmitting && (
          <Empty label="no images generated..." />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 pb-4">
          {images.map((src) => (
            <ImageCard key={src} src={src}>
              <Image src={src} alt="image" fill />
            </ImageCard>
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
export default ImagePage;
>>>>>>> v-2
