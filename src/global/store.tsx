import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import rootReducer from "./globalState";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoredActions: [FLUSH, PURGE, REGISTER, REHYDRATE, PAUSE, PERSIST],
      },
    }),
});
