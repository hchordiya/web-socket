import { createAsyncThunk } from "@reduxjs/toolkit";
import { TResponse } from "../../interfaces/response.interface";
import { getAllTodosService } from "../../services/todo.service";
import { openSnackBar } from "../features/snackBarSlice";
import { setSpinner } from "../features/spinnerSlice";

export const fetchAllTodoAsync = createAsyncThunk<TResponse>(
    "todo/fetchAllTodo",
    // Declare the type your function argument here:
    async (_, { dispatch }) => {
      dispatch(setSpinner(true));
      const response = await getAllTodosService();
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
