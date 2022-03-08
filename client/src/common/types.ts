export interface Task {
  readonly id: number;
  title: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}

export interface TasksState {
  loading: boolean;
  error: string | null;
  tasks: Task[];
}

export interface User {
  readonly id: number;
  username: string;
  email: string;
  readonly created_at: Date | null;
  readonly updated_at: Date | null;
}

export interface UsersState {
  loading: boolean;
  error: string | null;
  users: User;
}
