import { Task } from "../../common/types";

interface SubmitButtonProps {
  displayName: string;
  task?: Task;
  updateTask?: (task: Task) => void;
  id?: number;
  deleteTask?: (id: number) => void;
}

const SubmitButton = ({
  task,
  displayName,
  updateTask,
  id,
  deleteTask,
}: SubmitButtonProps) => {
  return (
    <>
      {task && updateTask ? (
        <button onClick={() => updateTask(task)}>{displayName}</button>
      ) : id && deleteTask ? (
        <button onClick={() => deleteTask(id)}>{displayName}</button>
      ) : (
        <button>{displayName}</button>
      )}
    </>
  );
};

export default SubmitButton;
