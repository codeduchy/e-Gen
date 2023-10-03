import { z } from "zod";

export const musicSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required",
  }),
});
