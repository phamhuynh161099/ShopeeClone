import HttpStatusCode from "@/constants/httpStatusCode.enum";
import axios, { AxiosError, type AxiosInstance } from "axios";
import react from "@vitejs/plugin-react-swc";
import { toast } from "react-toastify";
import {
  clearAccessTokenFromLS,
  getAccessTokenFromLs,
  saveAccessTokenToLS,
} from "./auth";

class Http {
  instance: AxiosInstance;
  private accessToken: string;
  constructor() {
    this.accessToken = getAccessTokenFromLs();
    this.instance = axios.create({
      baseURL: "https://api-ecom.duthanhduoc.com/",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken) {
          config.headers.authorization = this.accessToken;
          return config;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // https://axios-http.com/vi/docs/interceptors
    this.instance.interceptors.response.use(
      (response) => {
        console.log("response", response);
        const { url } = response.config;
        if (url === "/login" || url === "/register") {
          this.accessToken = response.data.data.access_token;
          saveAccessTokenToLS(this.accessToken);
        } else if (url === "/logout") {
          this.accessToken = "";
          clearAccessTokenFromLS();
        }
        return response;
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data;
          const message = data?.message || error.message;

          toast.error(message);
        }
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;
export default http;
