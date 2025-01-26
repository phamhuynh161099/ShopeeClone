import HttpStatusCode from "@/constants/httpStatusCode.enum";
import axios, { AxiosError } from "axios";

/**
 * Kiểm tra xem này có phải lỗi của axios không
 * Response: Nếu trả về true chắc chắn error là Axios Error
 */
export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error);
}

/**
 * Kiểm tra nó có phải là lỗi 422 không (lỗi không đúng định dang sv yêu cầu)
 */
export function isAxiosUnprocessableEntityError<FormError>(
  error: unknown
): error is AxiosError<FormError> {
  return (
    isAxiosError(error) &&
    error.response?.status === HttpStatusCode.UnprocessableEntity
  );
}
