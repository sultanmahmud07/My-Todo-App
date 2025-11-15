export type User = {
  id: string;
  name?: string;
  email: string;
};

export type Todo = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  order: number; // used for sorting
  createdAt?: string;
  updatedAt?: string;
};
