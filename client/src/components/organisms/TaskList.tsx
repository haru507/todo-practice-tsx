import { Task } from "../../common/types";
import { SubmitButton, TextInput } from "../atoms";

interface TaskListProp {
  error: string | null;
  loading: boolean;
  tasks: Task[];
  taskLists: Task[];
  taskListUpdate: (id: number, title: string) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: number) => void;
}

const TaskList = ({
  error,
  loading,
  tasks,
  taskLists,
  taskListUpdate,
  updateTask,
  deleteTask,
}: TaskListProp) => {
  return (
    <>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        taskLists &&
        tasks.map((task) => (
          <div key={task.id}>
            <TextInput
              title={task.title}
              onChange={(e) => taskListUpdate(task.id, e.target.value)}
            />
            <SubmitButton
              updateTask={() => updateTask(task)}
              displayName="更新"
              task={task}
            />
            <SubmitButton
              deleteTask={() => deleteTask(task.id)}
              displayName="削除"
              id={task.id}
            />
          </div>
        ))}
    </>
  );
};

export default TaskList;
