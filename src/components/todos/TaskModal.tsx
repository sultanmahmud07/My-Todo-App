"use client";

import { Trash } from "lucide-react";
import React, { useState, useTransition } from "react";
import { createTask } from "../actions/createTask";
import { toast } from "react-toastify";

interface TaskModalProps {
  open: boolean;
  onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const [isPending, startTransition] = useTransition();

  if (!open) return null;

  const handleSubmit = () => {
    const form = new FormData();
    form.append("title", title);
    form.append("description", description);
    form.append("priority", priority);
    form.append("todo_date", todoDate);

    startTransition(async () => {
      const res = await createTask(form);
      onClose();
      if (res?.id) {
        toast.success("Task created successfully");
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-8 relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold after:border-b after:border-[#5272FF] after:block after:w-28 pb-2">
            Add New Task
          </h2>
          <button onClick={onClose} className="text-black">
            Go Back
          </button>
        </div>

        {/* Title */}
        <label className="block mb-2 font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4 focus:outline-blue-400"
          placeholder="Task title..."
        />

        {/* Date */}
        <label className="block mb-2 font-medium">Date</label>
        <div className="relative mb-4">
          <input
            type="date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-blue-400"
          />
          <span className="absolute right-3 top-3 text-gray-500">📅</span>
        </div>

        {/* Priority */}
        <label className="block mb-2 font-medium">Priority</label>
        <div className="flex items-center gap-8 mb-6">

          <label className="flex items-center gap-2 cursor-pointer">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            Extreme
            <input
              type="radio"
              name="priority"
              value="extreme"
              onChange={(e) => setPriority(e.target.value)}
            />
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            Moderate
            <input
              type="radio"
              name="priority"
              value="moderate"
              onChange={(e) => setPriority(e.target.value)}
            />
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            Low
            <input
              type="radio"
              name="priority"
              value="low"
              onChange={(e) => setPriority(e.target.value)}
            />
          </label>
        </div>

        {/* Description */}
        <label className="block mb-2 font-medium">Task Description</label>
        <textarea
          className="w-full p-3 h-32 border rounded-lg focus:outline-blue-400 mb-6"
          placeholder="Start writing here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleSubmit}
            disabled={isPending}
            className="bg-[#5272FF] text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            {isPending ? "Saving..." : "Done"}
          </button>

          <button className="bg-[#EE0039] text-white px-4 py-2 rounded-lg">
            <Trash size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default TaskModal;
