import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import settingReducer from "../features/theme/themeSlice";
import eventReducer from "../features/events/eventSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: settingReducer,
    events: eventReducer,
  },
});

// Typed hooks helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
