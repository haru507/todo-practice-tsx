import { UsersState } from "../../common/types";
import { UsersActionType } from "../action-types/users";
import { UsersAction } from "../actions/users";
import { initialState } from "../initialState";

const UsersReducer = (
  state: UsersState = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case UsersActionType.GET_USER:
      return { loading: false, error: null, users: action.payload };

    case UsersActionType.SIGNUP_USER:
      return {
        loading: false,
        error: null,
        users: action.payload,
      };

    case UsersActionType.LOGIN_USER:
      return {
        loading: false,
        error: null,
        users: action.payload,
      };

    case UsersActionType.LOGOUT_USER:
      return {
        loading: false,
        error: null,
        users: {
          id: 0,
          username: "",
          email: "",
          created_at: null,
          updated_at: null,
        },
      };

    case UsersActionType.UPDATE_USER:
      return {
        loading: false,
        error: null,
        users: action.payload,
      };

    case UsersActionType.DELETE_USER:
      return {
        loading: false,
        error: null,
        users: {
          id: 0,
          username: "",
          email: "",
          created_at: null,
          updated_at: null,
        },
      };

    case UsersActionType.LOAD_USER:
      return { loading: true, error: null, users: state.users };

    case UsersActionType.LOAD_ERROR:
      return { loading: false, error: action.payload, users: state.users };

    default:
      return state;
  }
};

export default UsersReducer;
