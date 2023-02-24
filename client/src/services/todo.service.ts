import { TResponse } from "../interfaces/response.interface";
import { api } from "../utils/api";
import { ROOT, TODO } from "../utils/constants/url.constants";

export const getAllTodosService = async (): Promise<TResponse> => {
    return await api
      .get([ROOT,TODO])
      .then((res) => res.json());
  };