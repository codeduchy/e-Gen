<<<<<<< HEAD
import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Input is required",
=======
import { z } from "zod";

export const musicSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required",
>>>>>>> v-2
  }),
});
