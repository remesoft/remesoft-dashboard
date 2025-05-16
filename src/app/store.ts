import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import settingReducer from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme : settingReducer
  },
});

// Typed hooks helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
