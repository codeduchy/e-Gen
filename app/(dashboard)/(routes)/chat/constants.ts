import { z } from "zod";

<<<<<<< HEAD
export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Input is required",
  }),
=======
export const chatSchema = z.object({
  prompt: z.string().min(1, { message: "Prompt is required" }),
>>>>>>> v-2
});
