import useSWR from "swr";

interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  username?: string;
}

export function useUser() {
  const fetcher = async (url: string) => {
    const res = await fetch(`${url}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const error = new Error("Terjadi kesalahan saat fetch data");
      (error as any).status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data, error, isLoading, mutate, isValidating } = useSWR<{
    success: boolean;
    user: User;
  }>("/api/auth/check", fetcher, {
    shouldRetryOnError: false, // jangan retry kalau 401 (belum login)
    refreshInterval: 5000,
  });

  return {
    user: data?.user,
    isLoading,
    isError: error,
    isLogin: !!data?.user,
    mutate, // panggil ini setelah login/logout untuk refresh data
    isValidating,
  };
}
