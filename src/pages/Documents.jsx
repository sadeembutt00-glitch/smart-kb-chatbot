import {
  FileText,
  CheckCircle2,
  LoaderCircle,
  HardDrive,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import DocumentCard from "../components/documents/DocumentCard";
import UploadZone from "../components/documents/UploadZone";

const documents = [
  {
    name: "RAG_Research_Paper.pdf",
    type: "PDF",
    size: "2.4 MB",
    pages: 12,
    knowledgeBase: "FYP Research",
    uploaded: "Today",
    status: "processed",
  },
  {
    name: "AI_Notes.pdf",
    type: "PDF",
    size: "1.8 MB",
    pages: 24,
    knowledgeBase: "AI & Machine Learning",
    uploaded: "Yesterday",
    status: "processed",
  },
  {
    name: "DBMS_Notes.pdf",
    type: "PDF",
    size: "4.2 MB",
    pages: 46,
    knowledgeBase: "University Notes",
    uploaded: "Today",
    status: "processing",
  },
  {
    name: "Machine_Learning.docx",
    type: "DOCX",
    size: "1.2 MB",
    pages: 18,
    knowledgeBase: "AI & Machine Learning",
    uploaded: "2 days ago",
    status: "processed",
  },
  {
    name: "Python_Programming.txt",
    type: "TXT",
    size: "320 KB",
    pages: null,
    knowledgeBase: "Programming",
    uploaded: "3 days ago",
    status: "pending",
  },
  {
    name: "Distributed_Systems.pdf",
    type: "PDF",
    size: "3.7 MB",
    pages: 38,
    knowledgeBase: "University Notes",
    uploaded: "5 days ago",
    status: "failed",
  },
];

const stats = [
  {
    label: "Total Documents",
    value: "48",
    icon: FileText,
  },
  {
    label: "Processed",
    value: "42",
    icon: CheckCircle2,
  },
  {
    label: "Processing",
    value: "6",
    icon: LoaderCircle,
  },
  {
    label: "Storage Used",
    value: "1.8 GB",
    icon: HardDrive,
  },
];

export default function Documents() {
  return (
    <div className="mx-auto max-w-7xl">

      {/* Header */}
      <div className="mb-8">

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Documents
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Upload and manage documents used by your knowledge bases.
          </p>
        </div>

      </div>


      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>

                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    {stat.value}
                  </p>

                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon size={19} />
                </div>

              </div>

            </div>
          );
        })}

      </div>


      {/* Upload */}
      <div className="mb-8">

        <div className="mb-4">

          <h2 className="text-lg font-semibold text-slate-900">
            Upload Documents
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Add documents to your knowledge bases.
          </p>

        </div>

        <UploadZone />

      </div>


      {/* Documents */}
      <div>

        <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>

            <h2 className="text-lg font-semibold text-slate-900">
              Your Documents
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Manage your uploaded files and their processing status.
            </p>

          </div>

          <div className="flex gap-2">

            {/* Search */}
            <div className="relative">

              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search documents..."
                className="h-10 w-52 rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-xs text-slate-700 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
              />

            </div>

            {/* Filter */}
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
            >
              <SlidersHorizontal size={15} />
              Filter
            </button>

          </div>

        </div>


        {/* Document Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {documents.map((document) => (
            <DocumentCard
              key={document.name}
              name={document.name}
              type={document.type}
              size={document.size}
              pages={document.pages}
              knowledgeBase={document.knowledgeBase}
              uploaded={document.uploaded}
              status={document.status}
            />
          ))}

        </div>

      </div>

    </div>
  );
}