import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import settingReducer from "../features/theme/themeSlice";
import eventReducer from "../features/events/eventSlice";
import { bookApi } from "@/features/brain-bank/book/services/bookApi";
import { chaptersApi } from "@/features/brain-bank/chapters/services/chaptersApi";
import { groupsApi } from "@/features/brain-bank/groups/services/GroupsApi";
import { questionsApi } from "@/features/brain-bank/questions/services/questionsApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: settingReducer,
    events: eventReducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [chaptersApi.reducerPath]: chaptersApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bookApi.middleware)
      .concat(chaptersApi.middleware)
      .concat(groupsApi.middleware)
      .concat(questionsApi.middleware),
});
