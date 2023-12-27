import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uToggle: false,
  reset: false,
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
    resetToggled: (state: any) => {
      state.reset = true;
    },
    changeResetToggled: (state: any) => {
      state.reset = false;
    },
  },
});

export const {
  userToggled,
  userChangedToggled,
  resetToggled,
  changeResetToggled,
} = globalState.actions;

export default globalState.reducer;
