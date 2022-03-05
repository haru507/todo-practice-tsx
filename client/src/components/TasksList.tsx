import { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { Task } from "../common/types";

const TasksList: React.FC = () => {
  const [title, setTitle] = useState("");
  const { addTask, getTasks, updateTask, deleteTask } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks();
    setTasks(data);
  }, []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(title);
    setTitle("");
  };

  const taskListUpdate = (id: number, title: string) => {
    const newTaskList = data.map((taskList) => {
      if (taskList.id === id) taskList.title = title;
      return taskList;
    });
    setTasks(newTaskList);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button>Adding</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        tasks &&
        data.map((task) => (
          <div key={task.id}>
            <input
              value={task.title}
              onChange={(e) => taskListUpdate(task.id, e.target.value)}
            />
            <button onClick={() => updateTask(task)}>更新</button>
            <button onClick={() => deleteTask(task.id)}>削除</button>
          </div>
        ))}
    </div>
  );
};

export default TasksList;
