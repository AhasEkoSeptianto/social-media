import { API_URL, fetcher } from "../fetcher";
import { LoginFormData, RegisterFormData } from "../schemas/auth.schema";

export async function loginWithGoogle(credential: string) {
  const res = await fetch(`${API_URL}/api/auth/google`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ token: credential }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.message ?? "Login gagal");
  }

  return res.json();
}

export async function loginWithEmail(data: LoginFormData) {
  const res = await fetcher("/api/auth/login", {
    method: "POST",
    body: data,
  });
}

export async function registerAccount(data: RegisterFormData) {
  const res = await fetcher("/api/auth/register", {
    method: "POST",
    body: data,
  });
}

export async function logout() {
  const res = await fetcher("/api/auth/logout", {
    method: "POST",
  });
}
