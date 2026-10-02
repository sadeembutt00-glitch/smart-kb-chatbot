import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import KnowledgeBase from "../pages/KnowledgeBase";
import Chat from "../pages/Chat";
import History from "../pages/History";
import Settings from "../pages/Settings";
import Help from "../pages/Help";
import Documents from "../pages/Documents";

export default function UserRoutes() {
  return (
    <Routes>
      {/* User Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* User Application */}
      <Route
        path="/*"
        element={
          <MainLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/knowledge-base"
                element={<KnowledgeBase />}
              />
              <Route path="/chat" element={<Chat />} />
              <Route path="/history" element={<History />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />

              {/* Temporary */}
              <Route path="/documents" element={<Documents />} />
            </Routes>
          </MainLayout>
        }
      />
    </Routes>
  );
}