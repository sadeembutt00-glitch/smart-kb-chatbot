import {
  Library,
  Plus,
} from "lucide-react";

export default function KnowledgeEmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
        <Library size={25} />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900">
        No knowledge bases found
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
        Create your first knowledge base and start adding documents
        to build your AI-powered knowledge assistant.
      </p>

      <button
        type="button"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        <Plus size={17} />
        Create Knowledge Base
      </button>

    </div>
  );
}