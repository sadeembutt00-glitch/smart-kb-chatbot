import {
  Plus,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

export default function KnowledgeHeader({
  onCreate,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) {
  const categories = [
    "All",
    "Project",
    "Education",
    "AI",
    "Research",
    "Development",
    "Database",
    "Custom",
  ];

  return (
    <div className="mb-8">

      {/* Top Section */}
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Knowledge Base
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Organize your documents and build intelligent knowledge bases.
          </p>
        </div>

        <button
          type="button"
          onClick={onCreate}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          <Plus size={18} />
          Create Knowledge Base
        </button>

      </div>


      {/* Search + Filter */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">

        {/* Search */}
        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search knowledge bases..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-10 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            >
              <X size={15} />
            </button>
          )}

        </div>


        {/* Filter */}
        <div className="relative">

          <select
            value={selectedCategory}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-10 pr-10 text-sm font-medium text-slate-600 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 sm:w-44"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "All"
                  ? "All Categories"
                  : category}
              </option>
            ))}
          </select>

          <SlidersHorizontal
            size={17}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

        </div>

      </div>

    </div>
  );
}