import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/404";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";
import Dashboard from "../pages/Dashboard";

function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/adminPage" element={<AdminPage />} />
      <Route path="/authPage" element={<AuthPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
