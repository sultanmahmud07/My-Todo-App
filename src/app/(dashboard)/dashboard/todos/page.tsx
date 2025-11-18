import OpenModalButton from "@/components/todos/OpenModalButton";
import SearchAndFilter from "@/components/todos/SearchAndFilter";
import { TodoCard } from "@/components/todos/TodoCard";
import { getTodos } from "@/services/todo/getTodos";
import { TodoItem } from "@/types";
import Image from "next/image";


export default async function TodosPage() {
  const todos = await getTodos();
  // console.log(todos.results)
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-[]#0D224A ">Todos</h1>
        <OpenModalButton />
      </div>
      <SearchAndFilter />
      {
        todos?.results?.length > 0 ? (
          <>
            <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {todos?.results?.map((item: TodoItem) => (
                <TodoCard key={item.id} todo={item}></TodoCard>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col py-20 md:py-32 items-center justify-center gap-4 bg-white border border-[#D1D5DB] rounded-lg p-10 mt-6">
            <Image src="/no-todo-icon.svg" alt="No todos" width={200} height={200} />
            <p className="text-[#201F1E] text-center text-lg">No todos yet</p>
          </div>
        )
      }

    </div>
  );
}
