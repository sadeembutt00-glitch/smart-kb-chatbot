import {
  FileText,
  FileType2,
  MoreVertical,
  Download,
  Trash2,
  ExternalLink,
  Clock,
} from "lucide-react";

import ProcessingStatus from "./ProcessingStatus";

export default function DocumentCard({
  name,
  type,
  size,
  pages,
  knowledgeBase,
  uploaded,
  status,
}) {
  const isPdf = type?.toLowerCase() === "pdf";

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-indigo-200 hover:shadow-sm">

      {/* Top */}
      <div className="flex items-start justify-between">

        <div className="flex min-w-0 items-center gap-4">

          {/* File Icon */}
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              isPdf
                ? "bg-red-50 text-red-500"
                : "bg-indigo-50 text-indigo-600"
            }`}
          >
            {isPdf ? (
              <FileText size={21} />
            ) : (
              <FileType2 size={21} />
            )}
          </div>

          {/* File Name */}
          <div className="min-w-0">

            <h3 className="truncate text-sm font-semibold text-slate-800">
              {name}
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              {type} • {size}
              {pages ? ` • ${pages} pages` : ""}
            </p>

          </div>

        </div>

        {/* Menu */}
        <button
          type="button"
          className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <MoreVertical size={18} />
        </button>

      </div>


      {/* Knowledge Base */}
      <div className="mt-5 rounded-xl bg-slate-50 px-4 py-3">

        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
          Knowledge Base
        </p>

        <p className="mt-1 truncate text-xs font-medium text-slate-600">
          {knowledgeBase}
        </p>

      </div>


      {/* Bottom */}
      <div className="mt-5 flex items-center justify-between">

        <div className="flex items-center gap-2">

          <ProcessingStatus status={status} />

          <div className="hidden items-center gap-1 text-[11px] text-slate-400 sm:flex">
            <Clock size={12} />
            {uploaded}
          </div>

        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">

          <button
            type="button"
            title="Open document"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <ExternalLink size={15} />
          </button>

          <button
            type="button"
            title="Download document"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <Download size={15} />
          </button>

          <button
            type="button"
            title="Delete document"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
          >
            <Trash2 size={15} />
          </button>

        </div>

      </div>

    </div>
  );
}