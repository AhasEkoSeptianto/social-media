import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
}

export function useUser() {
  const { data, error, isLoading, mutate } = useSWR<{
    success: boolean;
    user: User;
  }>("/api/auth/me", fetcher, {
    shouldRetryOnError: false, // jangan retry kalau 401 (belum login)
  });

  return {
    user: data?.user,
    isLoading,
    isError: error,
    mutate, // panggil ini setelah login/logout untuk refresh data
  };
}
