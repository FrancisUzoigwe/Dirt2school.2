import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uToggle: false,
};

const globalState: any = createSlice({
  name: "state",
  initialState,
  reducers: {
    userToggled: (state: any) => {
      state.uToggle = true;
    },
    userChangedToggled: (state: any) => {
      state.uToggle = false;
    },
  },
});

export const { userToggled, userChangedToggled } = globalState.actions;

export default globalState.reducer;
