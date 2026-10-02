import { AuthProvider } from "./context/AuthContext.jsx";
import { KnowledgeProvider } from "./context/KnowledgeContext.jsx";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <KnowledgeProvider>
        <AppRoutes />
      </KnowledgeProvider>
    </AuthProvider>
  );
}

export default App;