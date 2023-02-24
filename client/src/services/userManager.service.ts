import { TResponse } from "../interfaces/response.interface";
import { api } from "../utils/api";
import {
  ROOT,
  EMPLOYEES,
  EMPLOYEES_LOCATION,
  EMPLOYEE_CHECKIN,
} from "../utils/constants/url.constants";

export const getUserManagerService = async (): Promise<TResponse> => {
  return await api
    .get([ROOT, EMPLOYEES, EMPLOYEES_LOCATION])
    .then((res) => res.json());
};

export const updateEmployeeService = async (
  payload: any
): Promise<TResponse> => {
  return await api
    .patch({ urls: [ROOT, EMPLOYEES, EMPLOYEE_CHECKIN], data: payload })
    .then((res) => res.json());
};
