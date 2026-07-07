import AdminDashboard from "./pages/AdminDashboard";
import CitizenSidebar from "./pages/CitizenSidebar";
import AdminSidebar from "./pages/AdminSidebar";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login />}
          />
          <Route
            path="/admin"
            element={<AdminSidebar />}
          />
          <Route
            path="/citizen"
            element={<CitizenSidebar />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;