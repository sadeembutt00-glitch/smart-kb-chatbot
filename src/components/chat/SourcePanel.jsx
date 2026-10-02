import {
  FileText,
  ChevronRight,
  Database,
} from "lucide-react";

const sources = [
  {
    name: "RAG_Research_Paper.pdf",
    page: "Page 4",
    score: "96%",
  },
  {
    name: "AI_Notes.pdf",
    page: "Page 18",
    score: "91%",
  },
  {
    name: "Machine_Learning.pdf",
    page: "Page 32",
    score: "87%",
  },
];

export default function SourcePanel() {
  return (
    <aside className="hidden w-72 shrink-0 flex-col border-l border-slate-200 bg-white xl:flex">

      {/* Header */}
      <div className="border-b border-slate-100 px-5 py-5">

        <div className="flex items-center gap-2">

          <Database size={18} className="text-indigo-600" />

          <h3 className="text-sm font-semibold text-slate-900">
            Sources
          </h3>

        </div>

        <p className="mt-1 text-xs text-slate-400">
          Retrieved from your knowledge base
        </p>

      </div>

      {/* Sources */}
      <div className="flex-1 overflow-y-auto p-4">

        <div className="space-y-3">

          {sources.map((source) => (
            <button
              key={source.name}
              className="group w-full rounded-xl border border-slate-200 p-4 text-left transition hover:border-indigo-200 hover:bg-indigo-50"
            >

              <div className="flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                  <FileText size={17} />
                </div>

                <div className="min-w-0 flex-1">

                  <p className="truncate text-xs font-semibold text-slate-700">
                    {source.name}
                  </p>

                  <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-400">
                    <span>{source.page}</span>

                    <span>•</span>

                    <span>{source.score} relevant</span>
                  </div>

                </div>

                <ChevronRight
                  size={15}
                  className="text-slate-300 transition group-hover:text-indigo-500"
                />

              </div>

            </button>
          ))}

        </div>

      </div>

      {/* Retrieval info */}
      <div className="border-t border-slate-100 p-4">

        <div className="rounded-xl bg-slate-50 p-4">

          <p className="text-xs font-semibold text-slate-700">
            Retrieval confidence
          </p>

          <div className="mt-3 flex items-center justify-between">

            <span className="text-2xl font-bold text-indigo-600">
              94%
            </span>

            <span className="text-xs text-emerald-600">
              Excellent
            </span>

          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200">

            <div className="h-full w-[94%] rounded-full bg-indigo-600" />

          </div>

        </div>

      </div>

    </aside>
  );
}