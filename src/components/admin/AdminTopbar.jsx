import {
  Bell,
  Search,
  ChevronDown,
  LogOut,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminTopbar() {
  const navigate = useNavigate();

  let admin = null;

  try {
    const storedAdmin = localStorage.getItem("smartkb_admin_user");

    if (storedAdmin) {
      admin = JSON.parse(storedAdmin);
    }
  } catch (error) {
    admin = null;
  }

  const adminName = admin?.name || "Administrator";
  const adminEmail = admin?.email || "No email available";

  const initials = adminName
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("smartkb_admin_user");
    navigate("/admin-login");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="flex min-h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="hidden flex-1 md:block">
          <div className="relative w-full max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search admin panel..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          {/* Mobile Search */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 md:hidden"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          {/* Notifications */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Notifications"
          >
            <Bell size={20} />

            <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-600 ring-2 ring-white" />
          </button>

          {/* Admin Profile */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-slate-50 sm:gap-3"
            >
              {/* Avatar */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white sm:h-10 sm:w-10">
                {initials}
              </div>

              {/* Name + Email */}
              <div className="hidden max-w-[220px] text-left sm:block">
                <p className="truncate text-sm font-semibold text-slate-800">
                  {adminName}
                </p>

                <p className="truncate text-xs text-slate-500">
                  {adminEmail}
                </p>
              </div>

              <ChevronDown
                size={16}
                className="hidden text-slate-400 transition-transform group-hover:rotate-180 sm:block"
              />
            </button>

            {/* Dropdown */}
            <div className="invisible absolute right-0 top-full z-50 mt-2 w-72 translate-y-1 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="border-b border-slate-100 px-3 py-3">
                <div className="flex items-center gap-3">
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
                  </div>
                </div>

                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600">
                  <ShieldCheck size={13} />
                  Administrator
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <LayoutDashboard size={18} />
                <span>User Dashboard</span>
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="border-t border-slate-100 px-4 py-3 md:hidden">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search admin panel..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white"
          />
        </div>
      </div>
    </header>
  );
}