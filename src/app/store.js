import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/features/counter/counterSlice";
import settingReducer from "@/features/theme/themeSlice";
import eventReducer from "@/features/events/eventSlice";
import bookReducer from "@/features/brain-back/book-slice";
import groupReducer from "@/features/brain-back/group-slice";
export const store = configureStore({
    reducer: {
        book: bookReducer,
        group: groupReducer,
        counter: counterReducer,
        theme: settingReducer,
        events: eventReducer,
    },
});
