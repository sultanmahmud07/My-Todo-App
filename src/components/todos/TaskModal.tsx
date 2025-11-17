import React from "react";

interface TaskModalProps {
  open: boolean;
  onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-8 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Add New Task</h2>

        {/* Title */}
        <label className="block mb-2 font-medium">Title</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg mb-4 focus:outline-blue-400"
          placeholder="Task title..."
        />

        {/* Date */}
        <label className="block mb-2 font-medium">Date</label>
        <div className="relative mb-4">
          <input
            type="date"
            className="w-full p-3 border rounded-lg focus:outline-blue-400"
          />
          <span className="absolute right-3 top-3 text-gray-500">📅</span>
        </div>

        {/* Priority */}
        <label className="block mb-2 font-medium">Priority</label>
        <div className="flex items-center gap-8 mb-6">
          <label className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            Extreme <input type="radio" name="priority" />
          </label>

          <label className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            Moderate <input type="radio" name="priority" />
          </label>

          <label className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            Low <input type="radio" name="priority" />
          </label>
        </div>

        {/* Description */}
        <label className="block mb-2 font-medium">Task Description</label>
        <textarea
          className="w-full p-3 h-32 border rounded-lg focus:outline-blue-400 mb-6"
          placeholder="Start writing here..."
        ></textarea>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Done
          </button>

          <button className="bg-red-100 text-red-600 px-4 py-2 rounded-lg">
            🗑️
          </button>
        </div>

      </div>
    </div>
  );
};

export default TaskModal;
