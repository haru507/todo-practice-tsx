import { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Task } from "../../common/types";
import { Form, TaskList } from "../organisms";
import { SubmitButton, TextInput } from "../atoms";

const Tasks: React.FC = () => {
  const [title, setTitle] = useState("");
  const { addTask, getTasks, updateTask, deleteTask } = useActions();
  const { tasks, error, loading } = useTypedSelector((state) => state.tasks);
  const [taskLists, setTaskLists] = useState<Task[]>([]);

  useEffect(() => {
    getTasks();
    setTaskLists(tasks);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(title);
    setTitle("");
  };

  const taskListUpdate = (id: number, title: string) => {
    const newTaskList = tasks.map((taskList) => {
      if (taskList.id === id) taskList.title = title;
      return taskList;
    });
    setTaskLists(newTaskList);
  };

  return (
    <div>
      <Form
        displayName="追加"
        title={title}
        onChange={(e) => setTitle(e.target.value)}
        onSubmit={onSubmit}
      />
      <TaskList
        error={error}
        loading={loading}
        tasks={tasks}
        taskLists={taskLists}
        taskListUpdate={taskListUpdate}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default Tasks;
