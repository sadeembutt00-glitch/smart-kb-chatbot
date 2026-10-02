import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const storedAdmin = localStorage.getItem("smartkb_admin_account");

    if (!storedAdmin) {
      setError(
        "No admin account found. Please create an admin account first."
      );
      return;
    }

    try {
      const admin = JSON.parse(storedAdmin);

      const emailMatches =
        email.trim().toLowerCase() ===
        admin.email.trim().toLowerCase();

      const passwordMatches = password === admin.password;

      if (!emailMatches || !passwordMatches) {
        setError("Invalid admin email or password.");
        return;
      }

      // Clear any previous user session.
      localStorage.removeItem("smartkb_user");

      // Save logged-in ADMIN.
      localStorage.setItem(
        "smartkb_admin_user",
        JSON.stringify({
          name: admin.name,
          email: admin.email,
        })
      );

      // ADMIN → ADMIN DASHBOARD
      navigate("/admin");
    } catch (error) {
      setError("Unable to login. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white">
            SK
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Login to the Smart KB administration panel
          </p>
        </div>

        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Admin Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter admin email"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Login as Administrator
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an admin account?{" "}
          <Link
            to="/admin-signup"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Create Admin Account
          </Link>
        </p>

        <div className="mt-4 text-center">
          <Link
            to="/login"
            className="text-xs font-medium text-slate-400 hover:text-slate-700"
          >
            ← User Login
          </Link>
        </div>
      </div>
    </div>
  );
}