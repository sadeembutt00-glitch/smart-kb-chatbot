import { useRef, useState } from "react";
import {
  Search,
  Upload,
  FileText,
  File,
  Eye,
  Trash2,
  Database,
  X,
} from "lucide-react";
import { useKnowledge } from "../context/useKnowledge";

function KnowledgeBase() {
  const { documents, addDocuments, deleteDocument } = useKnowledge();

  const [search, setSearch] = useState("");
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";

    const units = ["Bytes", "KB", "MB", "GB"];
    const index = Math.floor(Math.log(bytes) / Math.log(1024));

    return `${parseFloat(
      (bytes / Math.pow(1024, index)).toFixed(1)
    )} ${units[index]}`;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);

    if (files.length === 0) return;

    const newDocuments = files.map((file, index) => {
      const extension =
        file.name.split(".").pop()?.toUpperCase() || "FILE";

      return {
        id: Date.now() + index,
        name: file.name,
        type: extension,
        size: formatFileSize(file.size),
        pages: null,
        knowledgeBase: "FYP Research",
        uploaded: "Just now",
        date: formatDate(new Date()),
        status: "processing",
      };
    });

    addDocuments(newDocuments);

    event.target.value = "";
  };

  const handleDelete = (id) => {
    deleteDocument(id);
  };

  const filteredDocuments = documents.filter((document) =>
    document.name.toLowerCase().includes(search.toLowerCase())
  );

  const processedCount = documents.filter(
    (document) =>
      document.status === "processed" ||
      document.status === "Processed"
  ).length;

  const processingCount = documents.filter(
    (document) =>
      document.status === "processing" ||
      document.status === "Processing"
  ).length;

  const getStatusText = (status) => {
    if (status === "processed" || status === "Processed") {
      return "Processed";
    }

    if (status === "processing" || status === "Processing") {
      return "Processing";
    }

    if (status === "pending") {
      return "Pending";
    }

    if (status === "failed") {
      return "Failed";
    }

    return status;
  };

  const getStatusClass = (status) => {
    if (status === "processed" || status === "Processed") {
      return "bg-green-50 text-green-600";
    }

    if (status === "failed") {
      return "bg-red-50 text-red-600";
    }

    if (status === "pending") {
      return "bg-gray-100 text-gray-600";
    }

    return "bg-yellow-50 text-yellow-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".pdf,.doc,.docx,.txt"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Database size={22} className="text-blue-600" />

            <h1 className="text-2xl font-bold text-gray-900">
              Knowledge Base
            </h1>
          </div>

          <p className="text-sm text-gray-500">
            Manage the documents and information used by your chatbot.
          </p>
        </div>

        <button
          onClick={handleUploadClick}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
        >
          <Upload size={18} />
          Upload Documents
        </button>
      </div>

      {/* Statistics */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Documents
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            {documents.length}
          </h2>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Processed
          </p>

          <h2 className="mt-2 text-2xl font-bold text-green-600">
            {processedCount}
          </h2>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Processing
          </p>

          <h2 className="mt-2 text-2xl font-bold text-yellow-600">
            {processingCount}
          </h2>
        </div>

      </div>

      {/* Search */}
      <div className="mb-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="relative">

          <Search
            size={19}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
            >
              <X size={17} />
            </button>
          )}

        </div>
      </div>

      {/* Documents */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

        <div className="border-b border-gray-200 px-5 py-4">
          <h2 className="font-semibold text-gray-900">
            Documents
          </h2>
        </div>

        {filteredDocuments.length > 0 ? (

          <div className="divide-y divide-gray-100">

            {filteredDocuments.map((document) => (

              <div
                key={document.id}
                className="flex flex-col gap-4 px-5 py-4 transition hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between"
              >

                {/* Document Information */}
                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">

                    {document.type === "PDF" ? (
                      <FileText
                        size={22}
                        className="text-red-500"
                      />
                    ) : (
                      <File
                        size={22}
                        className="text-blue-500"
                      />
                    )}

                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {document.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {document.type} • {document.size} • Uploaded{" "}
                      {document.date || document.uploaded}
                    </p>
                  </div>

                </div>

                {/* Status + Actions */}
                <div className="flex items-center gap-3">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(
                      document.status
                    )}`}
                  >
                    {getStatusText(document.status)}
                  </span>

                  <button
                    title="View document"
                    className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-blue-600"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    title="Delete document"
                    onClick={() => handleDelete(document.id)}
                    className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="px-5 py-12 text-center">

            <FileText
              size={40}
              className="mx-auto mb-3 text-gray-300"
            />

            <h3 className="font-medium text-gray-700">
              No documents found
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              Try a different search term.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default KnowledgeBase;