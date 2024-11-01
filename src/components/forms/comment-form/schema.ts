import { z } from "zod";

export const createCommentSchema = z.object({
  comment: z
    .string()
    .trim()
    .min(1, { message: "Comment cannot be empty" }), // Ensures non-whitespace characters
});
