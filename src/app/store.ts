import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import settingReducer from "../features/theme/themeSlice";
import eventReducer from "../features/events/eventSlice";
import brainBankReducer from "@/features/brain-bank/state";
import { baseApi } from "@/features/brain-bank/api";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    group: groupReducer,
    counter: counterReducer,
    theme: settingReducer,
    events: eventReducer,
    brainBank: brainBankReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});
