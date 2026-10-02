import { Bell, Search, ChevronDown, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  // Get currently signed-in user
  let user = null;

  try {
    const storedUser = localStorage.getItem("smartkb_user");

    if (storedUser) {
      user = JSON.parse(storedUser);
    }
  } catch (error) {
    user = null;
  }

  const userName = user?.name || "User";
  const userEmail = user?.email || "No email available";

  // Create initials from user's name
  const initials = userName
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("smartkb_user");
    navigate("/login");
  };

  return (
    <header className="flex min-h-20 flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:px-5 md:px-6 lg:px-8">
      {/* Search */}
      <div className="relative min-w-0 flex-1 sm:max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search your knowledge..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-indigo-300 focus:bg-white sm:pr-4"
        />
      </div>

      {/* Right Side */}
      <div className="flex shrink-0 items-center gap-3 sm:gap-5">
        {/* Notifications */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          aria-label="Notifications"
        >
          <Bell size={20} />

          <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-600 ring-2 ring-white" />
        </button>

        {/* User Dropdown */}
        <div className="group relative">
          {/* User Button */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-slate-50 sm:gap-3"
          >
            {/* Avatar */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700 sm:h-10 sm:w-10">
              {initials}
            </div>

            {/* Name */}
            <div className="hidden text-left sm:block">
              <p className="max-w-[150px] truncate text-sm font-semibold text-slate-800">
                {userName}
              </p>

              <p className="text-xs text-slate-400">
                Student
              </p>
            </div>

            <ChevronDown
              size={16}
              className="hidden text-slate-400 transition-transform group-hover:rotate-180 sm:block"
            />
          </button>

          {/* Dropdown */}
          <div className="invisible absolute right-0 top-full z-50 mt-2 w-64 translate-y-1 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            {/* User Information */}
            <div className="border-b border-slate-100 px-3 py-3">
              <p className="truncate text-sm font-semibold text-slate-800">
                {userName}
              </p>

              <p className="mt-1 truncate text-xs text-slate-500">
                {userEmail}
              </p>
            </div>

            {/* Logout */}
            <button
              type="button"
              onClick={handleLogout}
              className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}