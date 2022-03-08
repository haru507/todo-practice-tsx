import { Provider } from "react-redux";
import { store } from "../state";
import Tasks from "./pages/Tasks";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <Tasks />
      </div>
    </Provider>
  );
};

export default App;
