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

interface UpdateTaskAction {
  type: ActionType.UPDATE_TASK;
  payload: Task;
}

interface DeleteTaskAction {
  type: ActionType.DELETE_TASK;
  payload: number;
}

export type Action =
  | LoadTaskAction
  | AddTaskAction
  | GetTasksAction
  | LoadErrorAction
  | UpdateTaskAction
  | DeleteTaskAction;
