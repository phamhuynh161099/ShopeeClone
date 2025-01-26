import { AuthResponse } from "@/types/auth.types";
import http from "@/utils/http";

export const registerAccount = (body: { email: string; password: string }) => {
  return http.post<AuthResponse>("/register", body);
};

export const login = (body: { email: string; password: string }) => {
  return http.post<AuthResponse>("/login", body);
};

export const logout = () => {
  return http.post<AuthResponse>("/logout");
};
