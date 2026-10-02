import { Routes, Route } from "react-router-dom";

import AdminLayout from "../components/admin/AdminLayout";

import AdminLogin from "../pages/AdminLogin";
import AdminSignup from "../pages/AdminSignup";
import AdminDashboard from "../pages/AdminDashboard";

export default function AdminRoutes() {
  return (
    <Routes>
      {/* Admin Authentication */}
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-signup" element={<AdminSignup />} />

      {/* Admin Application */}
      <Route
        path="/*"
        element={
          <AdminLayout>
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
            </Routes>
          </AdminLayout>
        }
      />
    </Routes>
  );
}