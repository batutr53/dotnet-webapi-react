import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { router } from "../routes/Routes";

axios.interceptors.request.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
      case 401:
      case 404:
      case 500:
        router.navigate("/servererror",{ state: { error: data, status:status } });
        break;
      case 400:
      case 403:
      case 405:
      case 409:
        toast.error(data.title);
        break;
      default:
        toast.error(data.title);
    }
    return Promise.reject(error.response);
  }
);

const apiClient = axios.create({
  baseURL: "http://localhost:5097/api/", // Replace with your API base URL
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export const getRequest = async (
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await apiClient.get(url, config);
  return response;
};

export const postRequest = async (
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await apiClient.post(url, data, config);
  return response;
};

export const putRequest = async (
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await apiClient.put(url, data, config);
  return response;
};

export const deleteRequest = async (
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const response = await apiClient.delete(url, config);
  return response;
};

const Catalog = {
  list: () => getRequest("products"),
  details: (id: number) => getRequest(`products/GetProductById?id=${id}`),
};

const request = {
  Catalog,
};

export default request;
