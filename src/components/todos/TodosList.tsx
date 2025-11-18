"use client";

import { TodoItem } from "@/types";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { TodoCard } from "./TodoCard";
import { updateTodo } from "@/services/todo/updateTodo";

export default function TodosList({ todos }: { todos: TodoItem[] }) {
  const [items, setItems] = useState<TodoItem[]>(todos);

  const reorder = (list: TodoItem[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result.map((item, index) => ({
      ...item,
      position: index + 1,
    }));
  };

  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const newOrder = reorder(items, result.source.index, result.destination.index);
    setItems(newOrder);

    // Send new position of ONLY the moved todo
    const movedTodo = newOrder[result.destination.index];

    const formData = new FormData();
    formData.append("position", String(movedTodo.position));

    await updateTodo(movedTodo.id, formData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todos-droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((todo, index) => (
              <Draggable key={todo.id} draggableId={String(todo.id)} index={index}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps}>
                    <TodoCard todo={todo} dragHandleProps={provided.dragHandleProps} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
