import { configureStore } from '@reduxjs/toolkit';
import taskDatareducer from "../reducers/reducer.js"


export const store = configureStore({
  reducer: {
    taskData: taskDatareducer
  },
});

export default store
