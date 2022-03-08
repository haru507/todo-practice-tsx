import axios from "axios";
import { Dispatch } from "redux";
import { UsersActionType } from "../action-types/users";
import { UsersAction } from "../actions/users";
import { SERVER_URL } from "../../common/envToText";
import { User } from "../../common/types";

const url: string = SERVER_URL.key;

export const signup = (username: string, email: string, password: string) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    dispatch({
      type: UsersActionType.LOAD_USER,
    });

    try {
      const res = await axios.post(
        `${url}/task`,
        {
          username: username,
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      const data: any = res.data.generatedMaps[0];

      const user: User = {
        id: data.id,
        username: username,
        email: email,
        created_at: data.created_at,
        updated_at: data.updated_at,
      };

      dispatch({
        type: UsersActionType.SIGNUP_USER,
        payload: user,
      });
      // ログイン画面に遷移？（JWT次第）
    } catch (err: any) {
      dispatch({
        type: UsersActionType.LOAD_ERROR,
        payload: err.message,
      });
    }
  };
};

export const login = () => {
  return async (dispatch: Dispatch<UsersAction>) => {};
};

export const logout = () => {
  return async (dispatch: Dispatch<UsersAction>) => {};
};

export const getUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    dispatch({
      type: UsersActionType.LOAD_USER,
    });

    try {
      const res = await axios.get(`${url}/task`, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data: User = res.data;

      console.log(data);

      dispatch({
        type: UsersActionType.GET_USER,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: UsersActionType.LOAD_ERROR,
        payload: err.message,
      });
    }
  };
};

// TODO: removeAction, updateAction 追加
export const updateUser = (user: User) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    dispatch({ type: UsersActionType.LOAD_USER });

    try {
      const res = await axios.put(`${url}/task/${user.id}/update`, user, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(res.data);
      dispatch({ type: UsersActionType.UPDATE_USER, payload: user });
    } catch (err: any) {
      dispatch({ type: UsersActionType.LOAD_ERROR, payload: err });
    }
  };
};

export const deleteUser = (id: number) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    dispatch({ type: UsersActionType.LOAD_USER });

    try {
      const res = await axios.delete(`${url}/task/${id}`, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(res.data);
      dispatch({ type: UsersActionType.DELETE_USER, payload: id });
    } catch (err: any) {
      dispatch({ type: UsersActionType.LOAD_ERROR, payload: err });
    }
  };
};
