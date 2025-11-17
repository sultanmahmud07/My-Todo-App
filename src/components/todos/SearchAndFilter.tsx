import { Search } from 'lucide-react'

const SearchAndFilter = () => {
  return (
     <div className="flex items-center justify-between gap-4 mb-6">
        <div className="relative w-full">
          <input
            placeholder="Search your task here..."
            className="w-full p-3 rounded-xl border focus:outline-blue-300 bg-white"
          />
          <button className="absolute right-0 top-0 p-3 h-full rounded-xl bg-[#5272FF] text-white"><Search /></button>
        </div>

        <button className="p-3 w-40 rounded-xl border bg-white flex items-center gap-2">
          Sort by ⬍
        </button>
      </div>
  )
}

export default SearchAndFilter
