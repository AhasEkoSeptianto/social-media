// hooks/posts/usePosts.ts
import useSWR from "swr";
import { getPosts } from "@/lib/api/posts.api";

export function usePosts() {
  const { data, error, isLoading, mutate } = useSWR("/api/posts", getPosts);

  return {
    posts: data ?? [],
    isLoading,
    isError: error,
    mutate,
  };
}
