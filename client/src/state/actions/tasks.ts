import { Task } from "../../common/types";
import { TasksActionType } from "../action-types/tasks";

interface GetTasksAction {
  type: TasksActionType.GET_TASKS;
  payload: Task[];
}

interface AddTaskAction {
  type: TasksActionType.ADD_TASK;
  payload: Task;
}

interface UpdateTaskAction {
  type: TasksActionType.UPDATE_TASK;
  payload: Task;
}

interface DeleteTaskAction {
  type: TasksActionType.DELETE_TASK;
  payload: number;
}

interface LoadTaskAction {
  type: TasksActionType.LOAD_TASK;
}

interface LoadErrorAction {
  type: TasksActionType.LOAD_ERROR;
  payload: string;
}

export type TasksAction =
  | LoadTaskAction
  | AddTaskAction
  | GetTasksAction
  | LoadErrorAction
  | UpdateTaskAction
  | DeleteTaskAction;
