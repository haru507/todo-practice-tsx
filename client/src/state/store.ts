import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { routerMiddleware } from "connected-react-router";

// Define individual settings of redux-logger
let middleWares = [routerMiddleware(history), thunk];
export const store = reduxCreateStore(
  reducers,
  {},
  applyMiddleware(...middleWares)
);
