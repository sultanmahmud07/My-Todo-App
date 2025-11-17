import { TodoCard } from "./TodoCard";

export const TodosPage = () => {
      const tasks = [
            {
                  title: "Backend Infrastructure",
                  desc: "Upgrading backend infrastructure for better performance",
                  due: "Apr 15, 2025",
                  priority: "Extreme",
            },
            {
                  title: "Mobile App Redesign",
                  desc: "Redesigning the mobile app interface for better user experience",
                  due: "Mar 25, 2025",
                  priority: "Moderate",
            },
            {
                  title: "Analytics Dashboard",
                  desc: "Creating a new analytics dashboard for clients",
                  due: "Mar 30, 2025",
                  priority: "Low",
            },
      ];


      return (
            <div className="mt-6">
                  <input
                        type="text"
                        placeholder="Search your task here..."
                        className="w-full px-4 py-2 border rounded-lg shadow-sm"
                  />


                  <h2 className="text-xl font-semibold mt-6 mb-4">Your Tasks</h2>


                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tasks.map((task, i) => (
                              <TodoCard key={i} {...task} />
                        ))}
                  </div>
            </div>
      );
};
