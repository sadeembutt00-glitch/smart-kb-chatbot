import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const storedUser = localStorage.getItem("smartkb_registered_user");

    if (!storedUser) {
      setError("No user account found. Please sign up first.");
      return;
    }

    try {
      const registeredUser = JSON.parse(storedUser);

      const emailMatches =
        email.trim().toLowerCase() ===
        registeredUser.email.trim().toLowerCase();

      const passwordMatches = password === registeredUser.password;

      if (!emailMatches || !passwordMatches) {
        setError("Invalid email or password.");
        return;
      }

      // Clear any previous admin session.
      localStorage.removeItem("smartkb_admin_user");

      // Save logged-in USER.
      localStorage.setItem(
        "smartkb_user",
        JSON.stringify({
          name: registeredUser.name,
          email: registeredUser.email,
        })
      );

      // USER → USER DASHBOARD
      navigate("/");
    } catch (error) {
      setError("Unable to login. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Smart KB
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Login to your account
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
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Sign up
          </Link>
        </p>

        <div className="mt-4 text-center">
          <Link
            to="/admin-login"
            className="text-xs font-medium text-slate-400 hover:text-slate-700"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
}