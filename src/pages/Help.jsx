import {
  BookOpen,
  MessageCircle,
  Database,
  FileText,
  Search,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const helpItems = [
  {
    icon: MessageCircle,
    title: "Using AI Chat",
    description:
      "Ask questions about the information stored in your connected knowledge bases.",
  },
  {
    icon: Database,
    title: "Knowledge Bases",
    description:
      "Create separate knowledge bases to organise documents for different subjects or projects.",
  },
  {
    icon: FileText,
    title: "Uploading Documents",
    description:
      "Upload supported documents and allow Smart KB to process them for retrieval.",
  },
  {
    icon: Search,
    title: "How RAG Works",
    description:
      "Smart KB retrieves relevant information from your documents before generating an answer.",
  },
];

export default function Help() {
  return (
    <div className="mx-auto max-w-6xl">

      {/* Header */}
      <div className="mb-8">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <HelpCircle size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Help & Support
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Learn how to use Smart KB and get the most out of your
              knowledge assistant.
            </p>
          </div>

        </div>

      </div>


      {/* Getting Started */}
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6">

        <div className="flex items-center gap-3">

          <BookOpen size={20} className="text-indigo-600" />

          <h2 className="text-lg font-semibold text-slate-900">
            Getting Started
          </h2>

        </div>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
          Smart KB is an AI-powered knowledge assistant that allows you
          to upload documents, build knowledge bases and ask questions
          using information retrieved from your own documents.
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-indigo-600">
          <span>Start by creating a Knowledge Base</span>
          <ArrowRight size={16} />
        </div>

      </div>


      {/* Help Cards */}
      <div className="grid gap-4 md:grid-cols-2">

        {helpItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-200 hover:shadow-sm"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-indigo-600">
                  <Icon size={20} />
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                </div>

              </div>

            </div>
          );
        })}

      </div>


      {/* FAQ */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">

        <h2 className="text-lg font-semibold text-slate-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-5 divide-y divide-slate-100">

          <div className="py-4">

            <h3 className="text-sm font-semibold text-slate-800">
              What is Smart KB?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Smart KB is a Retrieval-Augmented Generation (RAG)
              knowledge assistant that answers questions using
              information retrieved from your documents.
            </p>

          </div>

          <div className="py-4">

            <h3 className="text-sm font-semibold text-slate-800">
              Can Smart KB answer questions outside my documents?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              The system is designed to prioritise information retrieved
              from your connected knowledge base so that responses are
              grounded in your provided documents.
            </p>

          </div>

          <div className="py-4">

            <h3 className="text-sm font-semibold text-slate-800">
              What is a knowledge base?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              A knowledge base is a collection of documents that Smart KB
              processes and uses as a source of information when answering
              questions.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}