import {
  Library,
  FileText,
  MoreVertical,
  ArrowRight,
  Clock,
} from "lucide-react";

export default function KnowledgeCard({
  name,
  description,
  documents,
  updated,
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <Library size={21} />
        </div>

        <button
          type="button"
          className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <MoreVertical size={18} />
        </button>

      </div>

      {/* Content */}
      <div className="mt-5">

        <div className="flex items-center gap-2">

          <h3 className="truncate text-base font-semibold text-slate-900">
            {name}
          </h3>

        </div>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-500">
          {description}
        </p>

      </div>

      {/* Metadata */}
      <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4">

        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <FileText size={14} />
          {documents} documents
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Clock size={14} />
          {updated}
        </div>

      </div>

      {/* Footer */}
      <button
        type="button"
        className="mt-5 flex w-full items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-600 transition group-hover:bg-indigo-50 group-hover:text-indigo-600"
      >
        <span>Open Knowledge Base</span>

        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>

    </div>
  );
}