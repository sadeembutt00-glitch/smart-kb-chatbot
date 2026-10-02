import {
  FileText,
  Library,
  HardDrive,
} from "lucide-react";

const stats = [
  {
    label: "Total Documents",
    value: "48",
    description: "Across all knowledge bases",
    icon: FileText,
  },
  {
    label: "Knowledge Bases",
    value: "6",
    description: "Active knowledge collections",
    icon: Library,
  },
  {
    label: "Storage Used",
    value: "1.8 GB",
    description: "Of 10 GB available",
    icon: HardDrive,
  },
];

export default function KnowledgeStats() {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-3">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >

            <div className="flex items-start justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.label}
                </p>

                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {stat.description}
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
  );
}   