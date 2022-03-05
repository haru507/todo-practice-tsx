import { Provider } from "react-redux";
import { store } from "../state";
import TasksList from "./TasksList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <TasksList />
      </div>
    </Provider>
  );
};

export default App;
