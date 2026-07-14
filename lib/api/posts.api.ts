// lib/api/posts.api.ts
import { API_URL } from "../fetcher";
import { CreatePostFormData } from "../schemas/post.schema";

export async function getPosts(): Promise<CreatePostFormData> {
  const res = await fetch(`${API_URL}/api/posts`, { credentials: "include" });
  if (!res.ok) throw new Error("Gagal mengambil posts");
  return res.json();
}

export async function getPostById(id: string): Promise<CreatePostFormData> {
  const res = await fetch(`${API_URL}/api/posts/${id}`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Gagal mengambil post");
  return res.json();
}

export async function createPost(data: {
  content: string;
  image_url: string;
}): Promise<CreatePostFormData> {
  const res = await fetch(`${API_URL}/api/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Gagal membuat post");
  return res.json();
}
