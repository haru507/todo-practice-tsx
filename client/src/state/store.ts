import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store = reduxCreateStore(reducers, {}, applyMiddleware(thunk));
