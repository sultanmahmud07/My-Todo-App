import OpenModalButton from "@/components/todos/OpenModalButton";
import SearchAndFilter from "@/components/todos/SearchAndFilter";
import { TodoCard } from "@/components/todos/TodoCard";

const demoData = [
  {
    id: 160,
    title: "test-2",
    description: "Monthly financial report",
    priority: "moderate",
    todo_date: "2025-11-15",
  },
  {
    id: 161,
    title: "test-2",
    description: "Monthly financial report",
    priority: "low",
    todo_date: "2025-11-15",
  },
  {
    id: 162,
    title: "test-3",
    description: "Monthly financial report",
    priority: "extreme",
    todo_date: "2025-11-15",
  },
];



export default function TodosPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-[]#0D224A ">Todos</h1>
        <OpenModalButton />
      </div>
      <SearchAndFilter />
      <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {demoData.map((item) => (
         <TodoCard key={item.id} todo={item}></TodoCard>
        ))}
      </div>
    </div>
  );
}
