import { configureStore } from "@reduxjs/toolkit";
import TasksSlice from "./slices/TasksSlice";

/**This is the store for all slices */
const store = configureStore({
  reducer: {
    tasks: TasksSlice,
    /**Access of all micro reducers. */
  },
});

export default store;
