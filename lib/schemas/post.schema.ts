import { z } from "zod";

export const createPostSchema = z.object({
  context: z.string().min(1, "Post wajib diisi"),
});

export type CreatePostFormData = z.infer<typeof createPostSchema>;
