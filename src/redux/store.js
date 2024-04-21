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
import AsyncStorage from "@react-native-async-storage/async-storage";

import { authReducer } from "./auth/authSlice";
import { recipeReducer } from "./recipe/recipeSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["token"],
};

const persistRed = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistRed,
    recipes: recipeReducer,
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
