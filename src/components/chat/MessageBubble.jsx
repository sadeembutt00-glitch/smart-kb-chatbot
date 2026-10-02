import {
  User,
  Sparkles,
  Copy,
  RotateCcw,
} from "lucide-react";

export default function MessageBubble({ type, children }) {
  const isUser = type === "user";

  return (
    <div
      className={`flex gap-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >

      {!isUser && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
          <Sparkles size={17} />
        </div>
      )}

      <div className={`max-w-2xl ${isUser ? "order-first" : ""}`}>

        <div
          className={`rounded-2xl px-5 py-4 text-sm leading-7 ${
            isUser
              ? "rounded-br-md bg-indigo-600 text-white"
              : "rounded-bl-md border border-slate-200 bg-white text-slate-700"
          }`}
        >
          {children}
        </div>

        {!isUser && (
          <div className="mt-2 flex items-center gap-1">

            <button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
              <Copy size={14} />
            </button>

            <button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
              <RotateCcw size={14} />
            </button>

          </div>
        )}

      </div>

      {isUser && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600">
          <User size={17} />
        </div>
      )}

    </div>
  );
}