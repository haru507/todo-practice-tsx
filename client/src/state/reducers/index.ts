import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import usersReducer from "./userReducer";

const reducers = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
