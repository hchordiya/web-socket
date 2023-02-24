import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IHomeInitialState {
  status: string;
  error?: string;
}

// Define the initial state using that type
const initialState: IHomeInitialState = {
  status: "idle",
  error: undefined,
};

export const homeSlice = createSlice({
  name: "home",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

// export const {} = homeSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default homeSlice.reducer;
