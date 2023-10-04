"use client";
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

const ImagePage = () => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const {
    handleSubmit,
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

      const urls = response.data.map((image: { url: string }) => image.url);

      setImages(urls);

      reset();
    } catch (error: any) {
      console.log(error);
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
            <ImageCard src={src}>
              <Image src={src} alt="image" fill />
            </ImageCard>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ImagePage;
