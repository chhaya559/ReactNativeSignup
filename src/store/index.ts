import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slice/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { mmkvStorage } from "../storage/mmkvStrorage";

const persistConfig = {
  key: "root",
  storage: mmkvStorage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: AuthSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type AuthState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store)