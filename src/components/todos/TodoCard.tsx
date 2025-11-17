// TodoCard.tsx
import { Edit, Trash2, Grip } from "lucide-react";


export const TodoCard = ({ title, desc, due, priority }: any) => {
const badgeColor = {
Extreme: "bg-red-200 text-red-700",
Moderate: "bg-green-200 text-green-800",
Low: "bg-yellow-200 text-yellow-700",
}[priority];


return (
<div className="bg-white p-5 rounded-xl shadow-sm border relative">
<h3 className="text-lg font-semibold">{title}</h3>
<span className={`text-xs px-2 py-1 rounded-md ${badgeColor} absolute right-5 top-5`}>
{priority}
</span>
<p className="text-gray-600 text-sm my-2">{desc}</p>
<p className="text-xs text-gray-500">Due {due}</p>


<div className="flex justify-end gap-3 mt-4">
<Edit size={18} className="text-blue-500 cursor-pointer" />
<Trash2 size={18} className="text-red-500 cursor-pointer" />
</div>


<Grip size={18} className="text-gray-400 absolute right-3 bottom-3 cursor-grab" />
</div>
);
};