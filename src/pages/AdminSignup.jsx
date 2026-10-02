import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminSignup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const existingAdmin = localStorage.getItem("smartkb_admin_account");

    if (existingAdmin) {
      try {
        const admin = JSON.parse(existingAdmin);

        if (
          admin.email?.trim().toLowerCase() ===
          email.trim().toLowerCase()
        ) {
          setError("An admin account with this email already exists.");
          return;
        }
      } catch (error) {
        localStorage.removeItem("smartkb_admin_account");
      }
    }

    localStorage.setItem(
      "smartkb_admin_account",
      JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        password,
      })
    );

    navigate("/admin-login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white">
            SK
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Admin Signup
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Create your Smart KB administrator account
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
              Admin Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter admin name"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
            />
          </div>

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
              placeholder="Create a password"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Create Admin Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an admin account?{" "}
          <Link
            to="/admin-login"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Admin Login
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