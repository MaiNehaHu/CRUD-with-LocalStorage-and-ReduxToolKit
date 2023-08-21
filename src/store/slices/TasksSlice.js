import { createSlice } from "@reduxjs/toolkit";

//this is for one reducer
import { deleteAllTasks } from "../actions/action";

const key = "tasks";
function getList() {
  let list = JSON.parse(localStorage.getItem(key));

  if (list) {
    return JSON.parse(localStorage.getItem(key));
  } else return [];
}

const TasksSlice = createSlice({
  name: "task",
  initialState:  getList(),
  reducers: {
    addTask(state, action) {
      state.push(action.payload);

      localStorage.setItem(key, JSON.stringify(state));
    },
    removeTask(state, action) {
      let index = state.indexOf(action.payload);
      state.splice(index, 1);

      localStorage.setItem(key, JSON.stringify(state));
    },
    // deleteAllTasks(state, action) {
    //   return [];
    //   /**Don't do state=[]. This means assigning [] to state */
    // },
  },
  extraReducers(builder) {
    builder.addCase(deleteAllTasks, () => {
      localStorage.setItem(key, JSON.stringify([]));

      return [];
    });
  },
});

export default TasksSlice.reducer;
/**Note it's reducer not reducers  */
export const { addTask, removeTask /*deleteAllTasks */ } = TasksSlice.actions;
/**exporting to use in other components */

//if action is supposed to be handled by one reducer, use reducers
//if action is supposed to be handled by multiple reducers, use extraReducers.

//See how it works is.
//Whenever we write dispatch(reducer()) in any of the component.
//It checks all the slices that is the reducer present in this slice or not.
//If we want to use same functionality in another component also.
//We can use extraReducer with createAction method
