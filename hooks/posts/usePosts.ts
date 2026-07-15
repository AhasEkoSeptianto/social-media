import useSWR from "swr";
import { fetcher, nextFetcher } from "@/lib/fetcher";
import {
  FeedTypes,
  PaginationResponse,
  PostsResponse,
} from "@/type/components/features/feed";

export function usePosts() {
  const { data, error, isLoading, mutate } = useSWR("/api/posts", fetcher, {
    shouldRetryOnError: false, // jangan retry kalau 401 (belum login)
    refreshInterval: 5000,
  });

  return {
    posts: data,
    isLoading,
    isError: error,
    mutate,
  };
}
