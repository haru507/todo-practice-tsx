import { TasksState } from "../../common/types";
import { TasksActionType } from "../action-types/tasks";
import { TasksAction } from "../actions/tasks";
import { initialState } from "../initialState";

const TasksReducer = (
  state: TasksState = initialState,
  action: TasksAction
): TasksState => {
  switch (action.type) {
    case TasksActionType.LOAD_TASK:
      return { loading: true, error: null, tasks: [...state.tasks] };

    case TasksActionType.ADD_TASK:
      return {
        loading: false,
        error: null,
        tasks: [...state.tasks, action.payload],
      };

    case TasksActionType.GET_TASKS:
      return { loading: false, error: null, tasks: action.payload };

    case TasksActionType.LOAD_ERROR:
      return { loading: false, error: action.payload, tasks: [] };

    case TasksActionType.UPDATE_TASK:
      return {
        loading: false,
        error: null,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? (task = action.payload) : task
        ),
      };

    case TasksActionType.DELETE_TASK:
      return {
        loading: false,
        error: null,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

export default TasksReducer;
