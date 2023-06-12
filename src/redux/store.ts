import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import tokenSlice from "./slices/tokenSlice";
import productSlice from "./slices/productSlice";
import rolesSlice from "./slices/rolesSlice";
import offerSlice from "./slices/offerSlice";

const persistConfig = {
  key: "task",
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  authToken: tokenSlice,
  cartproduct: productSlice,
  offerstate: offerSlice,
  rolestate: rolesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export { store, persistor };
