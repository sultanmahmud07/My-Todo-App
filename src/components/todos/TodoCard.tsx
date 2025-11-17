// TodoCard.tsx
import { TodoItem } from "@/types";
import { GripVertical, PencilLine, Trash } from "lucide-react";


export const TodoCard = ({ todo }: { todo: TodoItem }) => {

      const priorityColor = {
            extreme: "bg-red-100 text-red-600",
            moderate: "bg-green-100 text-green-600",
            low: "bg-yellow-100 text-yellow-600",
      };
      return (
            <div
                  key={todo.id}
                  className="bg-white p-5 rounded-md shadow-sm border-[1px] border-[#FEE2E2] hover:shadow-md transition-all"
            >
                  <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-[#0D224A]">
                              {todo.title}
                        </h3>
                        <div className="flex items-center gap-1">
                              <span
                                    className={`px-3 py-1 text-sm rounded-lg ${priorityColor[todo.priority]
                                          }`}
                              >
                                    {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
                              </span>
                              <span className="text-[#8CA3CD]"><GripVertical size={19} /></span>
                        </div>
                  </div>

                  <p className="text-[#4B5563] mb-4">{todo.description}</p>
                  <div className="flex items-center justify-between gap-3">
                        <p className="text-sm text-[#4B5563] mb-4">
                              Due {new Date(todo.todo_date).toDateString()}
                        </p>

                        <div className="flex items-center gap-2">
                              <button className="p-2 bg-[#EEF7FF] text-blue-600 rounded-lg"><PencilLine size={15} /></button>
                              <button className="p-2 bg-[#EEF7FF] text-red-600 rounded-lg"><Trash size={15} /></button>
                        </div>
                  </div>
            </div>
      );
};