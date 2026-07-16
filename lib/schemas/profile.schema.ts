import z from "zod";

export const updateProfileSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  description: z.string().min(1, "Deskripsi wajib diisi"),
  image_url: z.string().min(1, "Url gambar wajib diisi"),
});

export type updateProfileFormData = z.infer<typeof updateProfileSchema>;
