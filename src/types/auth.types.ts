import { User } from "./user.types";
import { SuccessResponseApi } from "./utils.type";

export type AuthResponse = SuccessResponseApi<{
  access_tokne: string;
  expires: string;
  user: User;
}>;
