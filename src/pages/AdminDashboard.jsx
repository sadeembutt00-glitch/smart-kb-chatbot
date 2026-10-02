import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Database,
  FileText,
  MessageSquare,
  UserPlus,
  Activity,
  ShieldCheck,
  Settings,
  ArrowRight,
} from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    try {
      const storedAdmin = localStorage.getItem("smartkb_admin_user");

      if (!storedAdmin) {
        navigate("/admin-login");
        return;
      }

      const parsedAdmin = JSON.parse(storedAdmin);
      setAdmin(parsedAdmin);
    } catch (error) {
      localStorage.removeItem("smartkb_admin_user");
      navigate("/admin-login");
    }
  }, [navigate]);

  if (!admin) {
    return null;
  }

  const adminName = admin.name || "Administrator";
  const adminEmail = admin.email || "No email available";

  const initials = adminName
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const stats = [
    {
      title: "Total Users",
      value: "24",
      description: "Registered users",
      icon: Users,
    },
    {
      title: "Knowledge Bases",
      value: "12",
      description: "Active knowledge bases",
      icon: Database,
    },
    {
      title: "Documents",
      value: "156",
      description: "Uploaded documents",
      icon: FileText,
    },
    {
      title: "Conversations",
      value: "1,284",
      description: "Total AI conversations",
      icon: MessageSquare,
    },
  ];

  const recentUsers = [
    {
      name: "Ali Raza",
      email: "ali@example.com",
      date: "Today",
      status: "Active",
    },
    {
      name: "Sara Khan",
      email: "sara@example.com",
      date: "Yesterday",
      status: "Active",
    },
    {
      name: "Ahmed Hassan",
      email: "ahmed@example.com",
      date: "2 days ago",
      status: "Active",
    },
    {
      name: "Fatima Noor",
      email: "fatima@example.com",
      date: "3 days ago",
      status: "Inactive",
    },
  ];

  const adminActions = [
    {
      title: "Manage Users",
      description: "View and manage registered users",
      icon: Users,
      path: "/admin/users",
    },
    {
      title: "Upload Documents",
      description: "Add documents to the knowledge base",
      icon: FileText,
      path: "/admin/documents",
    },
    {
      title: "View Conversations",
      description: "Monitor user AI conversations",
      icon: MessageSquare,
      path: "/admin/conversations",
    },
    {
      title: "System Settings",
      description: "Configure administrator settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  return (
    <div className="min-h-full bg-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto w-full max-w-7xl">

        {/* =========================
            WELCOME SECTION
        ========================== */}
        <div className="mb-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            
            <div>
              <p className="mb-1 text-sm font-medium text-indigo-600">
                Admin Panel
              </p>

              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Welcome back, {adminName}
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                {adminEmail}
              </p>

              <p className="mt-1 text-sm text-slate-500 sm:text-base">
                Manage your Smart KB system from one place.
              </p>
            </div>

            {/* Admin Information */}
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                {initials}
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-800">
                  {adminName}
                </p>

                <p className="truncate text-xs text-slate-500">
                  {adminEmail}
                </p>

                <div className="mt-1 flex items-center gap-1 text-xs font-medium text-indigo-600">
                  <ShieldCheck size={13} />
                  Administrator
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            STATISTICS
        ========================== */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {stat.title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-slate-900">
                      {stat.value}
                    </h2>

                    <p className="mt-1 text-xs text-slate-400">
                      {stat.description}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <Icon size={21} />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

          {/* Recent Users */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm xl:col-span-2">
            
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              
              <div>
                <h2 className="text-base font-semibold text-slate-900">
                  Recent Users
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Recently registered users
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigate("/admin/users")}
                className="flex items-center gap-1 text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
              >
                View All
                <ArrowRight size={15} />
              </button>

            </div>

            <div className="divide-y divide-slate-100">
              {recentUsers.map((user) => {
                const userInitials = user.name
                  .split(" ")
                  .filter(Boolean)
                  .map((word) => word.charAt(0))
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();

                return (
                  <div
                    key={user.email}
                    className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    
                    <div className="flex items-center gap-3">
                      
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                        {userInitials}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-800">
                          {user.name}
                        </p>

                        <p className="truncate text-xs text-slate-500">
                          {user.email}
                        </p>
                      </div>

                    </div>

                    <div className="flex items-center gap-4">
                      
                      <span className="text-xs text-slate-400">
                        {user.date}
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {user.status}
                      </span>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* System Overview */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            
            <div className="mb-5">
              <h2 className="text-base font-semibold text-slate-900">
                System Overview
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Current Smart KB system status
              </p>
            </div>

            <div className="space-y-4">

              {/* System Status */}
              <div className="flex items-center justify-between">
                
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Activity size={18} />
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    System Status
                  </span>
                </div>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                  Operational
                </span>

              </div>

              {/* Knowledge Base */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Database size={18} />
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    Knowledge Base
                  </span>
                </div>

                <span className="text-sm font-semibold text-slate-800">
                  12 Active
                </span>

              </div>

              {/* Documents */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                    <FileText size={18} />
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    Documents
                  </span>
                </div>

                <span className="text-sm font-semibold text-slate-800">
                  156
                </span>

              </div>

              {/* Conversations */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                    <MessageSquare size={18} />
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    Conversations
                  </span>
                </div>

                <span className="text-sm font-semibold text-slate-800">
                  1,284
                </span>

              </div>

            </div>
          </div>
        </div>

        {/* =========================
            ADMIN ACTIONS
        ========================== */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          
          <div className="mb-5">
            <h2 className="text-base font-semibold text-slate-900">
              Admin Actions
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Quickly access common management tasks
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            
            {adminActions.map((action) => {
              const Icon = action.icon;

              return (
                <button
                  key={action.title}
                  type="button"
                  onClick={() => navigate(action.path)}
                  className="group rounded-xl border border-slate-200 p-4 text-left transition hover:border-slate-300 hover:bg-slate-50"
                >
                  
                  <div className="flex items-start justify-between">
                    
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
                      <Icon size={19} />
                    </div>

                    <ArrowRight
                      size={17}
                      className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-600"
                    />

                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-slate-800">
                    {action.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {action.description}
                  </p>

                </button>
              );
            })}
          </div>
        </div>

        {/* =========================
            USER MANAGEMENT
        ========================== */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          
          <div className="flex items-center gap-4">
            
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <UserPlus size={21} />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                User Management
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Manage accounts, permissions and user activity.
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={() => navigate("/admin/users")}
            className="flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Manage Users
            <ArrowRight size={16} />
          </button>

        </div>

      </div>
    </div>
  );
}   