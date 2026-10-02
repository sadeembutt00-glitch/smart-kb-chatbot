import {
  CheckCircle2,
  LoaderCircle,
  AlertCircle,
  Clock3,
} from "lucide-react";

export default function ProcessingStatus({ status }) {
  const statusConfig = {
    processed: {
      label: "Processed",
      icon: CheckCircle2,
      container: "bg-emerald-50 text-emerald-600",
    },

    processing: {
      label: "Processing...",
      icon: LoaderCircle,
      container: "bg-indigo-50 text-indigo-600",
    },

    pending: {
      label: "Pending",
      icon: Clock3,
      container: "bg-amber-50 text-amber-600",
    },

    failed: {
      label: "Failed",
      icon: AlertCircle,
      container: "bg-red-50 text-red-600",
    },
  };

  const current = statusConfig[status] || statusConfig.pending;

  const Icon = current.icon;

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${current.container}`}
    >
      <Icon
        size={13}
        className={status === "processing" ? "animate-spin" : ""}
      />

      <span>{current.label}</span>
    </div>
  );
}