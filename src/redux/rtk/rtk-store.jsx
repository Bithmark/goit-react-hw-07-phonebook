import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contacts-api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { filter } from "./filter-contacts";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
