import { User } from "../../common/types";
import { UsersActionType } from "../action-types/users";

interface GetUserAction {
  type: UsersActionType.GET_USER;
  payload: User;
}

interface LoginAction {
  type: UsersActionType.LOGIN_USER;
  payload: User;
}

interface SignUpAction {
  type: UsersActionType.SIGNUP_USER;
  payload: User;
}

interface LogoutAction {
  type: UsersActionType.LOGOUT_USER;
}

interface UpdateUserAction {
  type: UsersActionType.UPDATE_USER;
  payload: User;
}

interface DeleteUserAction {
  type: UsersActionType.DELETE_USER;
  payload: number;
}

interface LoadUserAction {
  type: UsersActionType.LOAD_USER;
}

interface LoadErrorAction {
  type: UsersActionType.LOAD_ERROR;
  payload: string;
}

export type UsersAction =
  | LoadUserAction
  | SignUpAction
  | LoginAction
  | LogoutAction
  | GetUserAction
  | LoadErrorAction
  | UpdateUserAction
  | DeleteUserAction;
