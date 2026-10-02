import {
  Paperclip,
  Send,
  Sparkles,
} from "lucide-react";

export default function ChatInput() {
  return (
    <div className="border-t border-slate-200 bg-white p-4">

      <div className="mx-auto max-w-3xl">

        <div className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 transition focus-within:border-indigo-300 focus-within:bg-white">

          <button className="mb-1 rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
            <Paperclip size={19} />
          </button>

          <textarea
            rows="1"
            placeholder="Ask anything about your knowledge..."
            className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />

          <button className="mb-1 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700">
            <Send size={17} />
          </button>

        </div>

        <div className="mt-2 flex items-center justify-center gap-1 text-[11px] text-slate-400">
          <Sparkles size={12} />
          Smart KB answers using your connected knowledge
        </div>

      </div>

    </div>
  );
}