/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { TodoItem } from "@/types";
import { GripVertical, PencilLine, Trash } from "lucide-react";
import Swal from "sweetalert2";
import { useState } from "react";
import EditTaskModal from "./EditTaskModal";
import { deleteTodo } from "@/services/todo/deleteTodo";
import { toast } from "react-toastify";
import { updateTodo } from "@/services/todo/updateTodo";

export const TodoCard = ({
  todo,
  dragHandleProps,
}: {
  todo: TodoItem;
  dragHandleProps?: any;
}) => {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this task?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      const res = await deleteTodo(todo.id);

      if (res.success) toast.success("Task deleted successfully");
      else toast.error("Delete failed");
    }
  };

  const handleUpdate = async (formData: FormData) => {
    const res = await updateTodo(todo.id, formData);

    if (res.success) {
      toast.success("Task updated successfully");
      setOpen(false);
    } else toast.error("Update failed");
  };

  const priorityColor = {
    extreme: "bg-red-100 text-red-600",
    moderate: "bg-green-100 text-green-600",
    low: "bg-yellow-100 text-yellow-600",
  };

  return (
    <>
      <div className="bg-white p-5 rounded-md shadow-sm border-[#FEE2E2] hover:shadow-md">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-[#0D224A]">{todo.title}</h3>

          <div className="flex items-center gap-1">
            <span className={`px-3 py-1 text-sm rounded-lg ${priorityColor[todo.priority]}`}>
              {todo.priority}
            </span>

            <button type="button" {...dragHandleProps}>
              <GripVertical size={19} className="text-[#8CA3CD]" />
            </button>
          </div>
        </div>

        <p className="text-[#4B5563] mb-4">{todo.description}</p>

        <div className="flex items-center justify-between">
          <p className="text-sm text-[#4B5563]">
            Due {todo.todo_date ? new Date(todo.todo_date).toDateString() : "No due date"}
          </p>

          <div className="flex items-center gap-2">
            <button onClick={() => setOpen(true)} className="p-2 bg-[#EEF7FF] text-blue-600 rounded-lg">
              <PencilLine size={15} />
            </button>

            <button onClick={handleDelete} className="p-2 bg-[#EEF7FF] text-red-600 rounded-lg">
              <Trash size={15} />
            </button>
          </div>
        </div>
      </div>

      <EditTaskModal open={open} onClose={() => setOpen(false)} todo={todo} onSubmit={handleUpdate} />
    </>
  );
};
