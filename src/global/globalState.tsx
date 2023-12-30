import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uToggle: false,
  reset: false,
  student: {} || null,
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
    mainStudent: (state: any, { payload }) => {
      state.student = payload;
    },
    logOutStudent: (state: any) => {
      state.student = null;
    },
  },
});

export const {
  userToggled,
  userChangedToggled,
  resetToggled,
  changeResetToggled,
  mainStudent,
  logOutStudent,
} = globalState.actions;

export default globalState.reducer;
