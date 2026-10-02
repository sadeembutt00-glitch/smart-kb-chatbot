import { useState } from "react";

import {
  X,
  Library,
  Sparkles,
} from "lucide-react";


export default function CreateKnowledgeModal({
  isOpen,
  onClose,
  onCreate,
}) {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");


  if (!isOpen) {
    return null;
  }


  const handleCreate = () => {

    const trimmedName = name.trim();
    const trimmedDescription = description.trim();


    if (!trimmedName) {
      setError("Please enter a knowledge base name.");
      return;
    }


    if (trimmedName.length < 3) {
      setError("Knowledge base name must contain at least 3 characters.");
      return;
    }


    setError("");


    onCreate({
      name: trimmedName,
      description:
        trimmedDescription ||
        "A custom knowledge base created with Smart KB.",
    });


    setName("");
    setDescription("");
  };


  const handleClose = () => {

    setName("");
    setDescription("");
    setError("");

    onClose();
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-sm">

      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-xl">

        {/* Header */}

        <div className="flex items-start justify-between border-b border-slate-100 p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Library size={20} />
            </div>

            <div>

              <h2 className="text-lg font-semibold text-slate-900">
                Create Knowledge Base
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Create a collection for your documents.
              </p>

            </div>

          </div>


          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={18} />
          </button>

        </div>


        {/* Form */}

        <div className="space-y-5 p-6">

          {/* Name */}

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Knowledge Base Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="e.g. FYP Research"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
            />

          </div>


          {/* Description */}

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Description
            </label>

            <textarea
              rows="3"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Describe what this knowledge base contains..."
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
            />

          </div>


          {/* Error */}

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-xs font-medium text-red-600">
              {error}
            </p>
          )}


          {/* Info */}

          <div className="flex gap-3 rounded-xl bg-indigo-50 p-4">

            <Sparkles
              size={18}
              className="mt-0.5 shrink-0 text-indigo-600"
            />

            <p className="text-xs leading-5 text-indigo-700">
              Documents added to this knowledge base will be processed
              and made available to the Smart KB AI assistant.
            </p>

          </div>

        </div>


        {/* Footer */}

        <div className="flex justify-end gap-3 border-t border-slate-100 p-6">

          <button
            type="button"
            onClick={handleClose}
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
          >
            Cancel
          </button>


          <button
            type="button"
            onClick={handleCreate}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Create Knowledge Base
          </button>

        </div>

      </div>

    </div>
  );
}