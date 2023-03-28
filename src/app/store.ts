import { configureStore } from '@reduxjs/toolkit';

import todoReduser from '../features/reducer/todo-slice';

export const store = configureStore({
  reducer: {
    todos: todoReduser
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
