import { Task } from "../../common/types";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface TasksState {
  loading: boolean;
  error: string | null;
  data: Task[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: TasksState = initialState,
  action: Action
): TasksState => {
  switch (action.type) {
    case ActionType.LOAD_TASK:
      return { loading: true, error: null, data: [...state.data] };
    case ActionType.ADD_TASK:
      return {
        loading: false,
        error: null,
        data: [...state.data, action.payload],
      };
    case ActionType.GET_TASKS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.LOAD_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
