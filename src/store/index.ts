import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slice/AuthSlice";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductsSlice from "../slice/ProductSlice";
import RootSaga from "./saga/RootSaga";
import { ProductsApi } from "../services/ProductsApi";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
//const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: AuthSlice.reducer,
  // products: ProductsSlice.reducer,
  [ProductsApi.reducerPath]: ProductsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({ thunk : false, serializableCheck: false }).concat(sagaMiddleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      ProductsApi.middleware
    ),
});

//sagaMiddleware.run(RootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
