import {
  MessageSquare,
  Library,
  History,
  ArrowRight,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  let user = null;

  try {
    const storedUser = localStorage.getItem("smartkb_user");

    if (storedUser) {
      user = JSON.parse(storedUser);
    }
  } catch (error) {
    user = null;
  }

  const userName = user?.name || "User";

  const knowledgeBases = [
    {
      name: "FYP Research",
      category: "Research",
      documents: 1,
      updated: "Today",
    },
    {
      name: "AI & Machine Learning",
      category: "Education",
      documents: 2,
      updated: "Yesterday",
    },
    {
      name: "University Notes",
      category: "Education",
      documents: 2,
      updated: "Today",
    },
    {
      name: "Programming",
      category: "Programming",
      documents: 1,
      updated: "3 days ago",
    },
  ];

  const stats = [
    {
      title: "Knowledge Bases",
      value: "4",
      icon: Library,
    },
    {
      title: "Conversations",
      value: "12",
      icon: MessageSquare,
    },
    {
      title: "History",
      value: "18",
      icon: History,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Welcome Section */}
      <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <p className="mb-2 text-sm font-medium text-indigo-600">
            Smart KB
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Welcome Back, {userName} 👋
          </h1>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Ask questions and explore your knowledge bases.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/chat")}
          className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          <Plus size={18} />
          Start New Chat
        </button>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Icon size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">{stat.title}</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">
          Quick Actions
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => navigate("/chat")}
            className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-indigo-200 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <MessageSquare size={21} />
              </div>

              <ArrowRight
                size={18}
                className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-600"
              />
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              Ask AI
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Start a conversation with your knowledge base.
            </p>
          </button>

          <button
            type="button"
            onClick={() => navigate("/history")}
            className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-indigo-200 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <History size={21} />
              </div>

              <ArrowRight
                size={18}
                className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-600"
              />
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              View History
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Review your previous AI conversations.
            </p>
          </button>
        </div>
      </div>

      {/* Knowledge Bases */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Your Knowledge Bases
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Explore the knowledge available to your account.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/knowledge-base")}
            className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            View All
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {knowledgeBases.map((kb) => (
            <button
              key={kb.name}
              type="button"
              onClick={() => navigate("/knowledge-base")}
              className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-indigo-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Library size={21} />
                </div>

                <ArrowRight
                  size={18}
                  className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-600"
                />
              </div>

              <h3 className="mt-4 font-semibold text-slate-900">
                {kb.name}
              </h3>

              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                  {kb.category}
                </span>

                <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600">
                  {kb.documents}{" "}
                  {kb.documents === 1 ? "document" : "documents"}
                </span>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Updated {kb.updated}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}