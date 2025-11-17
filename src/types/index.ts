export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  contact_number: string;
  birthday: string | null;
  profile_image: string | null;
  bio: string;
}

export interface TodoItem {
  id: number;
  title: string;
  description: string;
  priority: "extreme" | "moderate" | "low";
  is_completed: boolean;
  position: number;
  todo_date?: string; // ISO date string e.g. "2025-11-15"
  created_at: string;
  updated_at: string;
}
