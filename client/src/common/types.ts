export interface Task {
  readonly id: number;
  title: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}

export interface User {
  readonly id: number;
  username: string;
  email: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}
