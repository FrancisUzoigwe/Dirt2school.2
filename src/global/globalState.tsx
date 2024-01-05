import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uToggle: false,
  aToggle: false,
  reset: false,
  student: {} || null,
  dropDown: false,
  detail: false,
  cashout: false,
};

const globalState: any = createSlice({
  name: "state",
  initialState,
  reducers: {
    cashedOut: (state: any) => {
      state.cashout = true;
    },
    changeCashout: (state: any) => {
      state.cashout = false;
    },
    detailToggle: (state: any) => {
      state.detail = true;
    },
    changedDetailToggle: (state: any) => {
      state.detail = false;
    },
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
    dropped: (state: any) => {
      state.dropDown = true;
    },
    changedDrop: (state: any) => {
      state.dropDown = false;
    },
    mainStudent: (state: any, { payload }) => {
      state.student = payload;
    },
    logOutStudent: (state: any) => {
      state.student = null;
    },
    adminToggle: (state: any) => {
      state.aToggle = true;
    },
    changedAdminToggle: (state: any) => {
      state.aToggle = false;
    },
  },
});

export const {
  adminToggle,
  changeCashout,
  cashedOut,
  changedAdminToggle,
  userToggled,
  userChangedToggled,
  resetToggled,
  changeResetToggled,
  dropped,
  changedDrop,
  mainStudent,
  logOutStudent,
  detailToggle,
  changedDetailToggle,
} = globalState.actions;

export default globalState.reducer;
