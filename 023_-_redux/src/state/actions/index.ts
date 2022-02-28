import { Task } from "../../common/types";
import { ActionType } from "../action-types";

interface LoadTaskAction {
  type: ActionType.LOAD_TASK;
}

interface AddTaskAction {
  type: ActionType.ADD_TASK;
  payload: Task;
}

interface GetTasksAction {
  type: ActionType.GET_TASKS;
  payload: Task[];
}

interface LoadErrorAction {
  type: ActionType.LOAD_ERROR;
  payload: string;
}

export type Action =
  | LoadTaskAction
  | AddTaskAction
  | GetTasksAction
  | LoadErrorAction;
