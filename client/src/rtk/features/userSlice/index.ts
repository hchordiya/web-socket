import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../../interfaces/userManager.interface";
import  {
  fetchAllUserManagerAsync,
  updateEmployeeAsync,
} from "../../thunks/userManager.thunks";

// Define a type for the slice state
interface IUserManagerInitialState {
  users: Array<TUser>;
  status: string;
  error?: string;
}

// Define the initial state using that type
const initialState: IUserManagerInitialState = {
  users: [],
  status: "idle",
  error: undefined,
};

export const UserManagerSlice = createSlice({
  name: "UserManager",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getUserManagerAction: (state) => {},
    setUserManagerAction: (_, action) => {
      return action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllUserManagerAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllUserManagerAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload.data;
        // Add any fetched posts to the array
      })
      .addCase(fetchAllUserManagerAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateEmployeeAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateEmployeeAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload.data;
        // Add any fetched posts to the array
      })
      .addCase(updateEmployeeAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { getUserManagerAction, setUserManagerAction } =
  UserManagerSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default UserManagerSlice.reducer;
