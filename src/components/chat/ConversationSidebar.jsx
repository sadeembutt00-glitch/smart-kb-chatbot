import {
  Plus,
  Search,
  MessageSquare,
  MoreHorizontal,
} from "lucide-react";

const conversations = [
  {
    title: "What is RAG?",
    time: "10:42 AM",
  },
  {
    title: "Distributed databases",
    time: "9:30 AM",
  },
  {
    title: "Machine Learning notes",
    time: "Yesterday",
  },
  {
    title: "Python assignment",
    time: "Yesterday",
  },
];

export default function ConversationSidebar() {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-slate-200 bg-white">

      {/* Header */}
      <div className="border-b border-slate-100 p-4">

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
          <Plus size={17} />
          New Chat
        </button>

        {/* Search */}
        <div className="relative mt-4">

          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search chats..."
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs outline-none focus:border-indigo-300 focus:bg-white"
          />

        </div>

      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto p-3">

        <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Recent
        </p>

        <div className="space-y-1">

          {conversations.map((conversation, index) => (
            <button
              key={conversation.title}
              className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                index === 0
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >

              <MessageSquare
                size={17}
                className="shrink-0"
              />

              <div className="min-w-0 flex-1">

                <p className="truncate text-sm font-medium">
                  {conversation.title}
                </p>

                <p className="mt-0.5 text-[11px] text-slate-400">
                  {conversation.time}
                </p>

              </div>

              <MoreHorizontal
                size={16}
                className="text-slate-300 opacity-0 transition group-hover:opacity-100"
              />

            </button>
          ))}

        </div>

      </div>

    </aside>
  );
}