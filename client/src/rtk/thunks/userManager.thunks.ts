import { createAsyncThunk } from "@reduxjs/toolkit";
import { TResponse } from "../../interfaces/response.interface";
import { TEmployeeUpdatePayload } from "../../interfaces/userManager.interface";
import {
  getUserManagerService,
  updateEmployeeService,
} from "../../services/userManager.service";
import { openSnackBar } from "../features/snackBarSlice";
import { setSpinner } from "../features/spinnerSlice";

const fetchAllUserManagerAsync = createAsyncThunk<TResponse>(
  "employees/fetchAllEmployees",
  // Declare the type your function argument here:
  async (_, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await getUserManagerService();
    if (response.status === 200) {
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const updateEmployeeAsync = createAsyncThunk<TResponse,TEmployeeUpdatePayload>(
  "employees/updateEmployees",
  // Declare the type your function argument here:
  async (data, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await updateEmployeeService(data);
    if (response.status >= 200 && response.status < 300) {
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);
export { updateEmployeeAsync, fetchAllUserManagerAsync };
