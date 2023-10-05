<<<<<<< HEAD
import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Input is required",
=======
import { z } from "zod";

export const codeSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required",
>>>>>>> v-2
  }),
});
