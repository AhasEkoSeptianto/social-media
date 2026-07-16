import { nextFetcher } from "../fetcher";

export async function updateProfile(
  username: string,
  image_url: string,
  bio: string,
  tag: string[],
) {
  const res = await nextFetcher("/api/profile", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: {
      username,
      image_url,
      bio,
      tag: JSON.stringify(tag),
    },
  });
  if (!res.success) throw new Error("Gagal mengambil posts");
  return res;
}
