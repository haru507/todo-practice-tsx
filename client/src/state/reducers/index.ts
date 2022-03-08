import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import usersReducer from "./userReducer";

const reducers = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
  router: connectRouter(history),
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
