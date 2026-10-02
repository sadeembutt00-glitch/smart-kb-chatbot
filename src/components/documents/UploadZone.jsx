import { useRef, useState } from "react";
import {
  UploadCloud,
  FileText,
  FileType2,
  X,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const MAX_FILE_SIZE = 50 * 1024 * 1024;

const ACCEPTED_TYPES = {
  "application/pdf": "PDF",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "DOCX",
  "text/plain": "TXT",
};

export default function UploadZone() {
  const fileInputRef = useRef(null);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");

  const processFiles = (files) => {
    setError("");

    const validFiles = [];
    const errors = [];

    Array.from(files).forEach((file) => {
      if (!ACCEPTED_TYPES[file.type]) {
        errors.push(`${file.name}: unsupported file type.`);
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        errors.push(`${file.name}: file size exceeds 50 MB.`);
        return;
      }

      const alreadySelected = selectedFiles.some(
        (existingFile) =>
          existingFile.name === file.name &&
          existingFile.size === file.size
      );

      if (!alreadySelected) {
        validFiles.push(file);
      }
    });

    if (errors.length > 0) {
      setError(errors.join(" "));
    }

    if (validFiles.length > 0) {
      setSelectedFiles((previousFiles) => [
        ...previousFiles,
        ...validFiles,
      ]);
    }
  };

  const handleFileChange = (event) => {
    processFiles(event.target.files);

    // Allows selecting the same file again later.
    event.target.value = "";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    processFiles(event.dataTransfer.files);
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles((previousFiles) =>
      previousFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const getFileIcon = (file) => {
    if (file.type === "application/pdf") {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500">
          <FileText size={19} />
        </div>
      );
    }

    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
        <FileType2 size={19} />
      </div>
    );
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) {
      return `${bytes} B`;
    }

    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".pdf,.docx,.txt"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Upload Area */}
      <div
        onDragEnter={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          setIsDragging(false);
        }}
        onDrop={handleDrop}
        className={`rounded-2xl border-2 border-dashed px-6 py-10 text-center transition ${
          isDragging
            ? "border-indigo-400 bg-indigo-50"
            : "border-slate-200 bg-slate-50 hover:border-indigo-300 hover:bg-indigo-50/30"
        }`}
      >
        <div
          className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${
            isDragging
              ? "bg-indigo-600 text-white"
              : "bg-indigo-50 text-indigo-600"
          }`}
        >
          <UploadCloud size={27} />
        </div>

        <h3 className="mt-4 text-sm font-semibold text-slate-800">
          {isDragging
            ? "Drop your documents here"
            : "Upload your documents"}
        </h3>

        <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-slate-400">
          Drag and drop your files here, or click the button below to
          browse your computer.
        </p>

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Browse Files
        </button>

        <p className="mt-4 text-[11px] text-slate-400">
          PDF • DOCX • TXT • Maximum 50 MB per file
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4 text-red-600">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />

          <p className="text-xs leading-5">
            {error}
          </p>
        </div>
      )}

      {/* Selected Files */}
      {selectedFiles.length > 0 && (
        <div className="mt-6">

          <div className="mb-3 flex items-center justify-between">

            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Selected Documents
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                {selectedFiles.length} file
                {selectedFiles.length !== 1 ? "s" : ""} ready
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
              <CheckCircle2 size={15} />
              Ready
            </div>

          </div>

          <div className="space-y-2">

            {selectedFiles.map((file, index) => (
              <div
                key={`${file.name}-${file.size}-${index}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3"
              >
                {getFileIcon(file)}

                <div className="min-w-0 flex-1">

                  <p className="truncate text-sm font-medium text-slate-700">
                    {file.name}
                  </p>

                  <p className="mt-0.5 text-[11px] text-slate-400">
                    {ACCEPTED_TYPES[file.type]} •{" "}
                    {formatFileSize(file.size)}
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                  title="Remove file"
                >
                  <X size={16} />
                </button>

              </div>
            ))}

          </div>

          {/* Future Upload Button */}
          <button
            type="button"
            className="mt-4 w-full rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Upload {selectedFiles.length} Document
            {selectedFiles.length !== 1 ? "s" : ""}
          </button>

          <p className="mt-2 text-center text-[11px] text-slate-400">
            Upload processing will be connected to the backend later.
          </p>

        </div>
      )}

      {/* Supported Files */}
      {selectedFiles.length === 0 && (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">

          <div className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-500">
            <FileText size={15} />
            PDF
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-xs font-medium text-indigo-600">
            <FileType2 size={15} />
            DOCX
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
            <FileText size={15} />
            TXT
          </div>

        </div>
      )}

    </div>
  );
}