import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { authReducer } from "./auth/authSlice";
// import { phonesReducer } from './phone/phonesSlice';
// import { findReducer } from "./phone/findSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["token"],
};

const persistRed = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistRed,
    // phones: phonesReducer,
    // filter: findReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);

export const persistor = persistStore(store);
