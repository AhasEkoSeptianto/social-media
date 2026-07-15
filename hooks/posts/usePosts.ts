import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import {
  FeedTypes,
  PaginationResponse,
  PostsResponse,
} from "@/type/components/features/feed";

export function usePosts() {
  const { data, error, isLoading, mutate } = useSWR("/api/posts", fetcher);

  return {
    posts: data,
    isLoading,
    isError: error,
    mutate,
  };
}
