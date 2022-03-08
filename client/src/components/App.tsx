import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { store } from "../state";
import Tasks from "./pages/Tasks";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <h1>Todo List</h1>
          <Tasks />
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
