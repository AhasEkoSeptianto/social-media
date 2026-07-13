// lib/fetcher.ts
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

type ApiOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: unknown;
  headers?: Record<string, string>;
};

export const fetcher = async (url: string, options: ApiOptions) => {
  const res = await fetch(`${API_URL}${url}`, {
    method: options.method ?? "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!res.ok) {
    const error = new Error("Terjadi kesalahan saat fetch data");
    (error as any).status = res.status;
    throw error;
  }

  return res.json();
};
