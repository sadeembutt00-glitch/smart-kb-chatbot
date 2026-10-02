import {
  Sparkles,
  MoreVertical,
} from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
          <Sparkles size={19} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Smart KB AI
          </h2>

          <div className="flex items-center gap-1.5">

            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-xs text-slate-400">
              Knowledge Assistant
            </span>

          </div>
        </div>

      </div>

      <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-50 hover:text-slate-700">
        <MoreVertical size={19} />
      </button>

    </header>
  );
}