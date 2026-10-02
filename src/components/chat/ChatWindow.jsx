import MessageBubble from "./MessageBubble";

export default function ChatWindow() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#f8f9fc] px-6 py-8">

      <div className="mx-auto flex max-w-3xl flex-col gap-8">

        {/* Welcome */}
        <div className="py-6 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm">
            ✦
          </div>

          <h1 className="mt-4 text-2xl font-bold text-slate-900">
            How can I help you?
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Ask anything about your connected knowledge base.
          </p>

        </div>

        {/* User message */}
        <MessageBubble type="user">
          What is Retrieval-Augmented Generation?
        </MessageBubble>

        {/* AI response */}
        <MessageBubble type="assistant">

          <p>
            Retrieval-Augmented Generation (RAG) is an AI technique that
            combines information retrieval with text generation.
          </p>

          <p className="mt-3">
            Instead of relying only on the language model's existing
            knowledge, RAG retrieves relevant information from an external
            knowledge base and uses that information to generate a more
            accurate and context-aware response.
          </p>

          <div className="mt-4 rounded-xl bg-indigo-50 p-4">

            <p className="text-xs font-semibold text-indigo-700">
              RAG Pipeline
            </p>

            <p className="mt-2 text-xs text-indigo-600">
              Query → Retrieval → Context → LLM → Response
            </p>

          </div>

        </MessageBubble>

      </div>

    </div>
  );
}