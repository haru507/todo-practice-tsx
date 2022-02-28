import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";

const reducers = combineReducers({
  repositories: tasksReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
