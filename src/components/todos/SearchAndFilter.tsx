"use client";

import { Search, ArrowDownUp } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const SearchAndFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [query, setQuery] = useState(searchParams.get("search") || "");
  const [openFilter, setOpenFilter] = useState(false);

  // --- Utility: Update search params instantly ---
  const updateParams = (key: string, value?: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  // --- Quick Date Helpers ---
  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const today = formatDate(new Date());
  const plusDays = (d: number) => {
    const date = new Date();
    date.setDate(date.getDate() + d);
    return formatDate(date);
  };

  const filterOptions = [
    { label: "Deadline Today", value: today },
    { label: "Expires in 5 days", value: plusDays(5) },
    { label: "Expires in 10 days", value: plusDays(10) },
    { label: "Expires in 30 days", value: plusDays(30) },
  ];

  const selectedDate = searchParams.get("todo_date");

  return (
    <div className="flex items-center justify-between gap-4 mb-6">

      {/* Search Input */}
      <div className="relative w-full">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && updateParams("search", query)}
          placeholder="Search your task here..."
          className="w-full p-3 rounded-xl border focus:outline-blue-300 bg-white"
        />

        <button
          onClick={() => updateParams("search", query)}
          className="absolute right-0 top-0 p-3 h-full rounded-xl bg-[#5272FF] text-white"
        >
          <Search />
        </button>
      </div>

      {/* Filter Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpenFilter(!openFilter)}
          className="p-3 px-5 w-36 rounded-xl border border-[#D1D5DB] bg-white flex items-center justify-between"
        >
          Filter By <ArrowDownUp size={18} />
        </button>

        {/* Dropdown Panel */}
        {openFilter && (
          <div className="absolute top-14 right-0 mt-2 bg-white shadow-xl rounded-xl p-5 w-60 z-50">
            <h3 className="text-lg font-semibold border-b border-[#00000040] mb-2">Date</h3>
          

            {filterOptions.map((item) => (
              <label
                key={item.value}
                className="flex items-center gap-3 mb-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedDate === item.value}
                  onChange={() =>
                    updateParams(
                      "todo_date",
                      selectedDate === item.value ? undefined : item.value
                    )
                  }
                  className="w-5 h-5"
                />
                {item.label}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilter;
