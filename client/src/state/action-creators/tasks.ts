import axios from "axios";
import { Dispatch } from "redux";
import { TasksActionType } from "../action-types/tasks";
import { TasksAction } from "../actions/tasks";
import { SERVER_URL } from "../../common/envToText";
import { Task } from "../../common/types";

const url: string = SERVER_URL.key;

export const addTask = (title: string) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    dispatch({
      type: TasksActionType.LOAD_TASK,
    });

    try {
      const res = await axios.post(
        `${url}/task`,
        {
          title: title,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(res);

      const data: any = res.data.generatedMaps[0];

      const task: Task = {
        id: data.id,
        title: title,
        created_at: data.created_at,
        updated_at: data.updated_at,
      };

      dispatch({
        type: TasksActionType.ADD_TASK,
        payload: task,
      });
    } catch (err: any) {
      dispatch({
        type: TasksActionType.LOAD_ERROR,
        payload: err.message,
      });
    }
  };
};

export const getTasks = () => {
  return async (dispatch: Dispatch<TasksAction>) => {
    dispatch({
      type: TasksActionType.LOAD_TASK,
    });

    try {
      const res = await axios.get(`${url}/task`, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data: Task[] = res.data;

      console.log(data);

      dispatch({
        type: TasksActionType.GET_TASKS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: TasksActionType.LOAD_ERROR,
        payload: err.message,
      });
    }
  };
};

// TODO: removeAction, updateAction 追加
export const updateTask = (task: Task) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    dispatch({ type: TasksActionType.LOAD_TASK });

    try {
      const res = await axios.put(`${url}/task/${task.id}/update`, task, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(res.data);
      dispatch({ type: TasksActionType.UPDATE_TASK, payload: task });
    } catch (err: any) {
      dispatch({ type: TasksActionType.LOAD_ERROR, payload: err });
    }
  };
};

export const deleteTask = (id: number) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    dispatch({ type: TasksActionType.LOAD_TASK });

    try {
      const res = await axios.delete(`${url}/task/${id}`, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(res.data);
      dispatch({ type: TasksActionType.DELETE_TASK, payload: id });
    } catch (err: any) {
      dispatch({ type: TasksActionType.LOAD_ERROR, payload: err });
    }
  };
};
