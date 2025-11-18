"use client";

import { TodoItem } from "@/types";
import React from "react";

interface EditModalProps {
    open: boolean;
    onClose: () => void;
    todo: TodoItem;
    onSubmit: (formData: FormData) => Promise<void>;
}

const EditTaskModal: React.FC<EditModalProps> = ({ open, onClose, todo, onSubmit }) => {
    if (!open) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-8 relative"
            >
                <div className="flex justify-between items-center  mb-6">
                    <h2 className="text-2xl font-semibold">
                        Edit Task
                    </h2>
                    <button onClick={onClose} type="button" className="underline">Go Back</button>
                </div>

                {/* Title */}
                <label className="block mb-2 font-medium">Title</label>
                <input
                    name="title"
                    defaultValue={todo.title}
                    className="w-full p-3 border rounded-lg mb-4"
                />

                {/* Date */}
                <label className="block mb-2 font-medium">Date</label>
                <input
                    type="date"
                    name="todo_date"
                    defaultValue={todo.todo_date?.split("T")[0]}
                    className="w-full p-3 border rounded-lg mb-4"
                />

                {/* Priority */}
                <label className="block mb-2 font-medium">Priority</label>
                <div className="flex items-center gap-8 mb-6">
                    {["extreme", "moderate", "low"].map((p) => (
                        <label className="flex items-center gap-2" key={p}>
                            {p}
                            <input type="radio" name="priority" value={p}
                                defaultChecked={todo.priority === p} />
                        </label>
                    ))}
                </div>

                {/* Description */}
                <label className="block mb-2 font-medium">Task Description</label>
                <textarea
                    name="description"
                    defaultValue={todo.description}
                    className="w-full p-3 h-32 border rounded-lg mb-6"
                />

                <button
                    type="submit"
                    className="bg-[#5272FF] text-white px-6 py-2 rounded-lg"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default EditTaskModal;
